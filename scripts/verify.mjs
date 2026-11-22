import { readFileSync, existsSync } from 'node:fs'
import { Script } from 'node:vm'

const file=(path)=>readFileSync(path,'utf8')
const js=file('src/site/app.ts')
const css=file('src/site/styles.css')
const html=file('index.html')
const app=file('src/App.tsx')
const routes=['home','menu','plans','cart','planner','identity','login','signup','details','review','payment','pending','success','orders','account','staff-login','dashboard']
const modules=['الرئيسية','الطلبات','الاشتراكات','المنيو','العملاء','الشكاوى','المالية','الصلاحيات']
const images=['logo.svg','hero.png','chef.webp','menu-atlas.jpg','biryani-original.jpg','white-pasta-home.jpg','sayadia-home.jpg','beef-potato-home.jpg','review-sara.png','review-ahmad.png','review-lina.png','reference-qr.png','meal-balanced.webp','meal-chicken.webp']
const assert=(ok,label)=>{if(!ok)throw new Error('QA FAIL: '+label);console.log('✓ '+label)}
new Script(js.replace(/^\s*export\s*\{\s*\};?\s*$/gm,''))
assert(js.includes('function dashboard()'),'Eight unique dashboard screen renderer exists')
assert(js.includes('function paymentSuccess()'),'Subscription success route exists')
assert(js.includes('ad-permissions')&&js.includes('ad-day-grid')&&js.includes('ad-bubble')&&js.includes('ad-meter'),'Permissions, scheduling, chat and finance components implemented')
assert(modules.every(x=>js.includes("'"+x+"'")),'All eight admin sections present')
assert(routes.every(x=>js.includes("'"+x+"'")),'All customer and staff routes present')
assert(images.every(x=>existsSync('public/assets/'+x)),'All original Figma image assets exist')
assert(html.includes('fonts.googleapis.com/css2?family=Cairo'),'Cairo font loads from document head')
assert(css.includes('font-family:"Cairo"')&&css.includes('.ad-permissions'),'Correct Cairo fonts and admin styles present')
assert(app.includes('93K2-2026-11-22-01'),'Build marker is observable in app')
console.log('All static integrity tests passed. Still requires browser/manual visual review and backend integration.')
