import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'

const source=readFileSync('src/site/app.ts','utf8').replace(/^\s*export\s*\{\s*\};?\s*$/gm,'')
const stored={
  plan:'mixed', week:0, gov:'عمّان', zone:'العبدلي',
  staff:{name:'عامر المصري',role:'مدير النظام',login:'21/11/2026'},
  user:{name:'سارة خالد',email:'a@example.com'},authContext:'subscription',
  cart:[{id:'biryani',qty:1}],
  schedule:Array(20).fill('biryani'),
  details:{name:'سارة خالد',phone:'079000000',address:'عمّان',email:'a@example.com',note:''}
}
const run=(route,section)=> {
  const element={innerHTML:'',addEventListener(){}}
  const doc={
    documentElement:{dataset:{},dir:''},
    querySelector(selector){return selector==='#app'?element:{textContent:'93 Kitchen'}},
    title:''
  }
  const data={...stored,adminSection:section||'الرئيسية'}
  runInNewContext(source,{
    document:doc,window:{addEventListener(){},scrollTo(){}},
    location:{hash:'#/'+route},localStorage:{getItem(){return JSON.stringify(data)},setItem(){}}
  },{timeout:3000})
  if(element.innerHTML.length<500)throw new Error('Screen too short: '+route+(section||''))
  if(doc.documentElement.dataset.build!=='93K2-2026-11-22-01')throw new Error('Wrong build marker')
  return element.innerHTML
}
const customerRoutes=['home','menu','plans','cart','planner','identity','login','signup','details','review','payment','pending','success','orders','account','staff-login','dashboard']
const adminRoutes={
 'الرئيسية':'أولوية اليوم','الطلبات':'تفاصيل الطلب المحدد','الاشتراكات':'آخر تحديثات المشتركين',
 'المنيو':'جدولة الوجبات','العملاء':'المحادثة · سارة خالد',
 'الشكاوى':'شكوى #CMP-209','المالية':'توزيع الإيرادات','الصلاحيات':'صلاحيات الوصول التفصيلية'
}
for(const name of customerRoutes){run(name);console.log('✓ customer route: '+name)}
for(const [section,label] of Object.entries(adminRoutes)){
  const html=run('dashboard',section)
  if(!html.includes(label))throw new Error('Missing dashboard section: '+section+' / '+label)
  console.log('✓ staff route: '+section)
}
console.log('25/25 UI render smoke tests passed.')
