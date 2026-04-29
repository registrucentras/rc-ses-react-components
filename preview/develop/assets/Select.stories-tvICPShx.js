import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{a as H,u as Q}from"./index.esm-CYp9Cab2.js";import{r as N,R}from"./index-CqJgnuY1.js";import{v as Z,R as X}from"./index-DgQUVMAd.js";import{A as Y}from"./Autocomplete-DlVxanqp.js";import{B as ee}from"./Box-5aQFj6Xp.js";import{T as ne}from"./TextField-CbwdjbHj.js";import{_ as le,a as x,h as E,o as G,p as J}from"./defaultTheme-DebpQvRx.js";import{g as re,a as ie,c as ae,s as j}from"./styled-WTV67GdG.js";import{u as oe}from"./DefaultPropsProvider-BVIYNtGV.js";import{c as se}from"./composeClasses-fLhin0tj.js";import{F}from"./FieldPreviewRow-BFPZYCcI.js";import{F as te}from"./FieldView-DFTJO-a5.js";import{F as ce}from"./Fields-CKz5mWaJ.js";import{P as V}from"./PreviewTitle-kazte8yf.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useTranslation-ck04n6Jy.js";import"./index-N7TCJonw.js";import"./palette-DnsgEXz1.js";import"./WarningDiamondFillIcon-DuhQ7VGO.js";import"./IconBase.es-CLqjCiWW.js";import"./CheckCircleFillIcon-D8nshN66.js";import"./InfoFillIcon-hYqaTFre.js";import"./WarningFillIcon-BzTJp-M1.js";import"./colorManipulator-Ds2GocCg.js";import"./useMediaQuery-DBSxzD_Z.js";import"./useTheme-DSnQEdl-.js";import"./getThemeProps-B6U0-t43.js";import"./TransitionGroupContext-9aFOjLlw.js";import"./FormControl-CjKTz21K.js";import"./useFormControl-xtefzQVn.js";import"./isMuiElement-BPC6wUcC.js";import"./FormLabel-ab4E4RXz.js";import"./formControlState-Dq1zat_P.js";import"./Select-DpdivbLk.js";import"./index-D2rszWUr.js";import"./useSlotProps-BFyj758P.js";import"./resolveComponentProps-DkRHGtN-.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-BSF9GRTr.js";import"./Grow-c_vsDOWq.js";import"./index-DyiuT81b.js";import"./index-BO2TEXkE.js";import"./useTheme-BhEcWWRH.js";import"./utils-r0a3jgTl.js";import"./ownerDocument-DW-IO8s5.js";import"./OutlinedInput-D4YmPggr.js";import"./GlobalStyles-Ca-xPLe_.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-DKQkVSHg.js";import"./useId-vJrmKHVH.js";import"./createSvgIcon-b3XQm1yC.js";import"./Close-BFx6Ls9i.js";import"./Popper-BjRGm_eG.js";import"./Chip-DfUhxjGd.js";import"./ButtonBase-CM0MFk-i.js";import"./useIsFocusVisible-2h147_XD.js";import"./IconButton-tbpbrv5M.js";function me(n){return re("MuiCircularProgress",n)}ie("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const ue=["className","color","disableShrink","size","style","thickness","value","variant"];let _=n=>n,T,M,O,D;const A=44,de=J(T||(T=_`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),pe=J(M||(M=_`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),Ae=n=>{const{classes:l,variant:r,color:s,disableShrink:m}=n,t={root:["root",r,`color${E(s)}`],svg:["svg"],circle:["circle",`circle${E(r)}`,m&&"circleDisableShrink"]};return se(t,me,l)},be=j("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(n,l)=>{const{ownerState:r}=n;return[l.root,l[r.variant],l[`color${E(r.color)}`]]}})(({ownerState:n,theme:l})=>x({display:"inline-block"},n.variant==="determinate"&&{transition:l.transitions.create("transform")},n.color!=="inherit"&&{color:(l.vars||l).palette[n.color].main}),({ownerState:n})=>n.variant==="indeterminate"&&G(O||(O=_`
      animation: ${0} 1.4s linear infinite;
    `),de)),fe=j("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(n,l)=>l.svg})({display:"block"}),ve=j("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(n,l)=>{const{ownerState:r}=n;return[l.circle,l[`circle${E(r.variant)}`],r.disableShrink&&l.circleDisableShrink]}})(({ownerState:n,theme:l})=>x({stroke:"currentColor"},n.variant==="determinate"&&{transition:l.transitions.create("stroke-dashoffset")},n.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:n})=>n.variant==="indeterminate"&&!n.disableShrink&&G(D||(D=_`
      animation: ${0} 1.4s ease-in-out infinite;
    `),pe)),Ce=N.forwardRef(function(l,r){const s=oe({props:l,name:"MuiCircularProgress"}),{className:m,color:t="primary",disableShrink:v=!1,size:C=40,style:S,thickness:u=3.6,value:h=0,variant:b="indeterminate"}=s,d=le(s,ue),p=x({},s,{color:t,disableShrink:v,size:C,thickness:u,value:h,variant:b}),k=Ae(p),g={},P={},w={};if(b==="determinate"){const f=2*Math.PI*((A-u)/2);g.strokeDasharray=f.toFixed(3),w["aria-valuenow"]=Math.round(h),g.strokeDashoffset=`${((100-h)/100*f).toFixed(3)}px`,P.transform="rotate(-90deg)"}return a.jsx(be,x({className:ae(k.root,m),style:x({width:C,height:C},P,S),ownerState:p,ref:r,role:"progressbar"},w,d,{children:a.jsx(fe,{className:k.svg,ownerState:p,viewBox:`${A/2} ${A/2} ${A} ${A}`,children:a.jsx(ve,{className:k.circle,style:g,ownerState:p,cx:A,cy:A,r:(A-u)/2,fill:"none",strokeWidth:u})})}))});function e(){var n="/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/form/inputs/Select.tsx",l="4f986ac636ac127054aeb62dbad88ed31e473ff8",r=window,s="__coverage__",m={path:"/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/form/inputs/Select.tsx",statementMap:{0:{start:{line:9,column:38},end:{line:9,column:56}},1:{start:{line:22,column:6},end:{line:22,column:11}},2:{start:{line:23,column:29},end:{line:23,column:39}},3:{start:{line:24,column:13},end:{line:24,column:70}},4:{start:{line:24,column:27},end:{line:24,column:52}},5:{start:{line:27,column:6},end:{line:32,column:4}},6:{start:{line:33,column:19},end:{line:33,column:27}},7:{start:{line:34,column:24},end:{line:40,column:3}},8:{start:{line:35,column:10},end:{line:38,column:12}},9:{start:{line:37,column:33},end:{line:37,column:57}},10:{start:{line:41,column:2},end:{line:94,column:4}},11:{start:{line:55,column:38},end:{line:55,column:84}},12:{start:{line:56,column:36},end:{line:56,column:83}},13:{start:{line:58,column:55},end:{line:58,column:169}},14:{start:{line:60,column:38},end:{line:60,column:87}},15:{start:{line:62,column:12},end:{line:62,column:39}},16:{start:{line:63,column:12},end:{line:63,column:65}},17:{start:{line:63,column:31},end:{line:63,column:65}},18:{start:{line:66,column:51},end:{line:81,column:11}},19:{start:{line:83,column:37},end:{line:83,column:48}},20:{start:{line:84,column:12},end:{line:87,column:22}},21:{start:{line:97,column:0},end:{line:103,column:50}},22:{start:{line:99,column:4},end:{line:99,column:44}},23:{start:{line:101,column:4},end:{line:101,column:2333}}},fnMap:{0:{name:"RcSesSelect",decl:{start:{line:8,column:9},end:{line:8,column:20}},loc:{start:{line:8,column:28},end:{line:95,column:1}},line:8},1:{name:"(anonymous_1)",decl:{start:{line:24,column:21},end:{line:24,column:22}},loc:{start:{line:24,column:27},end:{line:24,column:52}},line:24},2:{name:"(anonymous_2)",decl:{start:{line:35,column:4},end:{line:35,column:5}},loc:{start:{line:35,column:10},end:{line:38,column:12}},line:35},3:{name:"(anonymous_3)",decl:{start:{line:37,column:26},end:{line:37,column:27}},loc:{start:{line:37,column:33},end:{line:37,column:57}},line:37},4:{name:"(anonymous_4)",decl:{start:{line:55,column:26},end:{line:55,column:27}},loc:{start:{line:55,column:38},end:{line:55,column:84}},line:55},5:{name:"(anonymous_5)",decl:{start:{line:56,column:24},end:{line:56,column:25}},loc:{start:{line:56,column:36},end:{line:56,column:83}},line:56},6:{name:"(anonymous_6)",decl:{start:{line:58,column:32},end:{line:58,column:33}},loc:{start:{line:58,column:55},end:{line:58,column:169}},line:58},7:{name:"(anonymous_7)",decl:{start:{line:60,column:20},end:{line:60,column:21}},loc:{start:{line:60,column:38},end:{line:60,column:87}},line:60},8:{name:"(anonymous_8)",decl:{start:{line:61,column:25},end:{line:61,column:26}},loc:{start:{line:61,column:49},end:{line:64,column:11}},line:61},9:{name:"(anonymous_9)",decl:{start:{line:66,column:23},end:{line:66,column:24}},loc:{start:{line:66,column:51},end:{line:81,column:11}},line:66},10:{name:"(anonymous_10)",decl:{start:{line:82,column:24},end:{line:82,column:25}},loc:{start:{line:82,column:69},end:{line:88,column:11}},line:82}},branchMap:{0:{loc:{start:{line:24,column:27},end:{line:24,column:52}},type:"binary-expr",locations:[{start:{line:24,column:27},end:{line:24,column:40}},{start:{line:24,column:44},end:{line:24,column:52}}],line:24},1:{loc:{start:{line:35,column:10},end:{line:38,column:12}},type:"cond-expr",locations:[{start:{line:35,column:18},end:{line:38,column:5}},{start:{line:38,column:8},end:{line:38,column:12}}],line:35},2:{loc:{start:{line:37,column:13},end:{line:37,column:71}},type:"binary-expr",locations:[{start:{line:37,column:13},end:{line:37,column:65}},{start:{line:37,column:69},end:{line:37,column:71}}],line:37},3:{loc:{start:{line:37,column:34},end:{line:37,column:46}},type:"binary-expr",locations:[{start:{line:37,column:34},end:{line:37,column:35}},{start:{line:37,column:39},end:{line:37,column:46}}],line:37},4:{loc:{start:{line:55,column:38},end:{line:55,column:84}},type:"cond-expr",locations:[{start:{line:55,column:67},end:{line:55,column:79}},{start:{line:55,column:82},end:{line:55,column:84}}],line:55},5:{loc:{start:{line:56,column:36},end:{line:56,column:83}},type:"cond-expr",locations:[{start:{line:56,column:65},end:{line:56,column:78}},{start:{line:56,column:81},end:{line:56,column:83}}],line:56},6:{loc:{start:{line:58,column:55},end:{line:58,column:169}},type:"binary-expr",locations:[{start:{line:58,column:55},end:{line:58,column:68}},{start:{line:58,column:72},end:{line:58,column:98}},{start:{line:58,column:102},end:{line:58,column:131}},{start:{line:58,column:135},end:{line:58,column:169}}],line:58},7:{loc:{start:{line:60,column:47},end:{line:60,column:86}},type:"binary-expr",locations:[{start:{line:60,column:47},end:{line:60,column:71}},{start:{line:60,column:75},end:{line:60,column:86}}],line:60},8:{loc:{start:{line:62,column:26},end:{line:62,column:37}},type:"binary-expr",locations:[{start:{line:62,column:26},end:{line:62,column:29}},{start:{line:62,column:33},end:{line:62,column:37}}],line:62},9:{loc:{start:{line:63,column:12},end:{line:63,column:65}},type:"if",locations:[{start:{line:63,column:12},end:{line:63,column:65}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:63},10:{loc:{start:{line:75,column:18},end:{line:75,column:104}},type:"cond-expr",locations:[{start:{line:75,column:44},end:{line:75,column:97}},{start:{line:75,column:100},end:{line:75,column:104}}],line:75},11:{loc:{start:{line:86,column:14},end:{line:86,column:134}},type:"binary-expr",locations:[{start:{line:86,column:14},end:{line:86,column:22}},{start:{line:86,column:42},end:{line:86,column:134}}],line:86}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0,0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/rc-ses-react-components/rc-ses-react-components/src/components/form/inputs/Select.tsx"],names:[],mappings:"AAwHgB;AAxHhB;AACA;AACA;AACA;AACA;AAEA;AAoCA;AACE;AAEA;AAAM;AACJ;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACG;AAEL;AAEA;AAEA;AAAM;AACqB;AACT;AAChB;AACA;AACA;AACkB;AAGpB;AAEA;AAA4B;AAGpB;AACE;AAC2E;AAE7E;AACS;AAGjB;AACE;AAAC;AAAA;AACC;AACA;AACA;AACmB;AACJ;AAEf;AAAC;AAAA;AACC;AACA;AACgC;AACyC;AACD;AACxE;AAKiC;AAEjC;AAC4E;AAE1E;AACA;AAAmD;AACrD;AACA;AAEE;AAAC;AAAA;AACK;AACJ;AACO;AACK;AACA;AAGL;AAA2D;AACzC;AACrB;AAEJ;AACA;AAAA;AACF;AAGA;AACA;AAEI;AAEA;AAIE;AAEJ;AAEJ;AACO;AACQ;AAAA;AACjB;AAAA;AAGN;AAEA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4f986ac636ac127054aeb62dbad88ed31e473ff8"},t=r[s]||(r[s]={});(!t[n]||t[n].hash!==l)&&(t[n]=m);var v=t[n];return e=function(){return v},v}e();function c(n){e().f[0]++;const[l,r]=(e().s[0]++,R.useState("")),{clearable:s,control:m,errors:t,label:v,loading:C,onInputChange:S,options:u,placeholder:h,rules:b,slotProps:d,...p}=(e().s[1]++,n),{disabled:k,name:g}=(e().s[2]++,p),P=(e().s[3]++,N.useMemo(()=>(e().f[1]++,e().s[4]++,e().b[0][0]++,p.id??(e().b[0][1]++,Z())),[p.id])),{field:{onChange:w,value:f}}=(e().s[5]++,H({control:m,name:g,rules:b,shouldUnregister:!0})),K=(e().s[6]++,!!t),L=(e().s[7]++,R.useMemo(()=>{var i;return e().f[2]++,e().s[8]++,f?(e().b[1][0]++,{value:f,label:(e().b[2][0]++,((i=u.find(o=>(e().f[3]++,e().s[9]++,e().b[3][0]++,(o&&(e().b[3][1]++,o.value))===f)))==null?void 0:i.label)??(e().b[2][1]++,""))}):(e().b[1][1]++,null)},[u,f]));return e().s[10]++,a.jsx(X,{id:P,errors:t,label:v,required:!!(b!=null&&b.required),...d==null?void 0:d.wrapper,children:a.jsx(Y,{id:P,disabled:k,disableClearable:s===!1,getOptionLabel:i=>(e().f[4]++,e().s[11]++,typeof i=="object"?(e().b[4][0]++,i.label):(e().b[4][1]++,"")),getOptionKey:i=>(e().f[5]++,e().s[12]++,typeof i=="object"?(e().b[5][0]++,i==null?void 0:i.value):(e().b[5][1]++,"")),inputValue:l,isOptionEqualToValue:(i,o)=>(e().f[6]++,e().s[13]++,e().b[6][0]++,i===""||(e().b[6][1]++,typeof i=="object"&&(e().b[6][2]++,typeof o=="object")&&(e().b[6][3]++,(i==null?void 0:i.value)===(o==null?void 0:o.value)))),loading:C,onChange:(i,o)=>(e().f[7]++,e().s[14]++,w((e().b[7][0]++,typeof o=="object"&&(e().b[7][1]++,o==null?void 0:o.value)))),onInputChange:(i,o,q)=>{e().f[8]++,e().s[15]++,r((e().b[8][0]++,o??(e().b[8][1]++,null))),e().s[16]++,S?(e().b[9][0]++,e().s[17]++,S(i,o,q)):e().b[9][1]++},options:u,renderInput:i=>(e().f[9]++,e().s[18]++,a.jsx(ne,{...i,disabled:k,error:K,InputProps:{...i.InputProps,endAdornment:a.jsxs(a.Fragment,{children:[C?(e().b[10][0]++,a.jsx(Ce,{color:"inherit",size:16})):(e().b[10][1]++,null),i.InputProps.endAdornment]})},placeholder:h})),renderOption:(i,o,q,z)=>{e().f[10]++;const{key:U,...W}=(e().s[19]++,i);return e().s[20]++,a.jsxs(ee,{component:"li",...W,children:[a.jsx("span",{className:"rc-ses-select-option-label",children:z.getOptionLabel(o)}),(e().b[11][0]++,!!o&&(e().b[11][1]++,a.jsx("span",{className:"rc-ses-select-option-description",children:o.description})))]},U)},value:L,...d==null?void 0:d.field})})}e().s[21]++;try{e().s[22]++,c.displayName="RcSesSelect",e().s[23]++,c.__docgenInfo={description:"",displayName:"RcSesSelect",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"any"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},control:{defaultValue:null,description:"",name:"control",required:!1,type:{name:"Control<any>"}},rules:{defaultValue:null,description:"",name:"rules",required:!1,type:{name:'Omit<RegisterOptions<any, any>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">'}},onInputChange:{defaultValue:null,description:'Callback fired when the input value changes.\n@param event The event source of the callback.\n@param value The new value of the text input.\n@param reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.',name:"onInputChange",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>, value: string, reason: AutocompleteInputChangeReason) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},errors:{defaultValue:null,description:"",name:"errors",required:!1,type:{name:"FieldError"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:'("" | Option)[]'}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},slotProps:{defaultValue:null,description:"",name:"slotProps",required:!1,type:{name:'{ controller?: Partial<Omit<TControllerProps, ImmediateControllerProps>>; field?: Partial<Omit<TFieldProps, "onInputChange">>; wrapper?: Partial<...> | undefined; } | undefined'}}}}}catch{}const En={title:"components/inputs/Select",component:c,argTypes:{disabled:{control:{type:"boolean"},table:{defaultValue:{}}},onInputChange:{table:{disable:!0}},control:{table:{disable:!0}},errors:{table:{disable:!0}},options:{table:{disable:!0}},name:{table:{disable:!0}},rules:{table:{disable:!0}},id:{table:{disable:!0}},loading:{table:{disable:!0}}},tags:["autodocs"]},ke=n=>{const{control:l,formState:{errors:r}}=Q({mode:"all",defaultValues:{selection:""}}),{label:s,disabled:m,slotProps:t}=n;return a.jsxs(ce,{children:[a.jsx(te,{children:a.jsx(c,{id:"selection",name:"selection",control:l,label:s,disabled:m,slotProps:t,options:[{value:"pasirinkimas-1",label:"Pasirinkimas #1"},{value:"pasirinkimas-2",label:"Pasirinkimas #2"}]})}),a.jsxs(F,{children:[a.jsx(V,{children:"State previews label on side"}),a.jsx(c,{id:"selection",name:"selection",control:l,rules:{required:!0},label:"Active",errors:r==null?void 0:r.selection,options:[{value:"pasirinkimas-1",label:"Pasirinkimas #1"},{value:"pasirinkimas-2",label:"Pasirinkimas #2"}]}),a.jsx(c,{id:"selection",name:"selection",control:l,rules:{required:!0},label:"Disabled",disabled:!0,errors:r==null?void 0:r.selection,options:[{value:"pasirinkimas-1",label:"Pasirinkimas #1"},{value:"pasirinkimas-2",label:"Pasirinkimas #2"}]}),a.jsx(c,{id:"selection",name:"selection",control:l,rules:{required:!0},label:"Error",errors:{message:"Error Message",type:"required"},options:[{value:"pasirinkimas-1",label:"Pasirinkimas #1"},{value:"pasirinkimas-2",label:"Pasirinkimas #2"}]})]}),a.jsxs(F,{children:[a.jsx(V,{children:"State previews label on top"}),a.jsx(c,{id:"selection",name:"selection",control:l,rules:{required:!0},label:"Active",slotProps:{wrapper:{labelOnTop:!0}},errors:r==null?void 0:r.selection,options:[{value:"pasirinkimas-1",label:"Pasirinkimas #1"},{value:"pasirinkimas-2",label:"Pasirinkimas #2"}]}),a.jsx(c,{id:"selection",name:"selection",control:l,rules:{required:!0},label:"Disabled",disabled:!0,slotProps:{wrapper:{labelOnTop:!0}},errors:r==null?void 0:r.selection,options:[{value:"pasirinkimas-1",label:"Pasirinkimas #1"},{value:"pasirinkimas-2",label:"Pasirinkimas #2"}]}),a.jsx(c,{id:"selection",name:"selection",control:l,rules:{required:!0},label:"Error",slotProps:{wrapper:{labelOnTop:!0}},errors:{message:"Error",type:"required"},options:[{value:"pasirinkimas-1",label:"Pasirinkimas #1"},{value:"pasirinkimas-2",label:"Pasirinkimas #2"}]})]})]})},ye=n=>{const{label:l,disabled:r,slotProps:s}=n;return`
  import RcSesSelect from '@/components/form/inputs/Select'


  const MyComponent = () => (

  const { control, formState: { errors } } = useForm<SingleStepFormModel>({ mode: 'all', defaultValues: { selection: '', } })

    <RcSesSelect
      id="selection"
      name="selection"
      control={control}
      rules={{ required: true }}
      label="${l}"
      disabled={${r}}
      errors={errors?.selection}
      slotProps=${s.wrapper.labelOnTop?"{{ wrapper: { labelOnTop: true } }}":"{{ wrapper: { labelOnTop: false} }}"}
      options={[
        { value: 'pasirinkimas-1', label: 'Pasirinkimas #1' },
        { value: 'pasirinkimas-2', label: 'Pasirinkimas #2' },
      ]}

    />
  );`},y=ke.bind({});y.args={label:"Label",disabled:!1,slotProps:{wrapper:{labelOnTop:!1}}};y.parameters={docs:{source:{type:"dynamic",transform:(n,l)=>ye(l.args)}}};var I,B,$;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const {
    control,
    formState: {
      errors
    }
  } = useForm<SingleStepFormModel>({
    mode: 'all',
    defaultValues: {
      selection: ''
    }
  });
  const {
    label,
    disabled,
    slotProps
  } = args;
  return <Fields>
      <FieldView>
        <RcSesSelect id='selection' name='selection' control={control} label={label} disabled={disabled} slotProps={slotProps} options={[{
        value: 'pasirinkimas-1',
        label: 'Pasirinkimas #1'
      }, {
        value: 'pasirinkimas-2',
        label: 'Pasirinkimas #2'
      }]} />
      </FieldView>

      <FieldPreviewRow>
        <PreviewTitle>State previews label on side</PreviewTitle>
        <RcSesSelect id='selection' name='selection' control={control} rules={{
        required: true
      }} label='Active' errors={errors?.selection} options={[{
        value: 'pasirinkimas-1',
        label: 'Pasirinkimas #1'
      }, {
        value: 'pasirinkimas-2',
        label: 'Pasirinkimas #2'
      }]} />
        <RcSesSelect id='selection' name='selection' control={control} rules={{
        required: true
      }} label='Disabled' disabled errors={errors?.selection} options={[{
        value: 'pasirinkimas-1',
        label: 'Pasirinkimas #1'
      }, {
        value: 'pasirinkimas-2',
        label: 'Pasirinkimas #2'
      }]} />
        <RcSesSelect id='selection' name='selection' control={control} rules={{
        required: true
      }} label='Error' errors={{
        message: 'Error Message',
        type: 'required'
      }} options={[{
        value: 'pasirinkimas-1',
        label: 'Pasirinkimas #1'
      }, {
        value: 'pasirinkimas-2',
        label: 'Pasirinkimas #2'
      }]} />
      </FieldPreviewRow>

      <FieldPreviewRow>
        <PreviewTitle>State previews label on top</PreviewTitle>
        <RcSesSelect id='selection' name='selection' control={control} rules={{
        required: true
      }} label='Active' slotProps={{
        wrapper: {
          labelOnTop: true
        }
      }} errors={errors?.selection} options={[{
        value: 'pasirinkimas-1',
        label: 'Pasirinkimas #1'
      }, {
        value: 'pasirinkimas-2',
        label: 'Pasirinkimas #2'
      }]} />
        <RcSesSelect id='selection' name='selection' control={control} rules={{
        required: true
      }} label='Disabled' disabled slotProps={{
        wrapper: {
          labelOnTop: true
        }
      }} errors={errors?.selection} options={[{
        value: 'pasirinkimas-1',
        label: 'Pasirinkimas #1'
      }, {
        value: 'pasirinkimas-2',
        label: 'Pasirinkimas #2'
      }]} />
        <RcSesSelect id='selection' name='selection' control={control} rules={{
        required: true
      }} label='Error' slotProps={{
        wrapper: {
          labelOnTop: true
        }
      }} errors={{
        message: 'Error',
        type: 'required'
      }} options={[{
        value: 'pasirinkimas-1',
        label: 'Pasirinkimas #1'
      }, {
        value: 'pasirinkimas-2',
        label: 'Pasirinkimas #2'
      }]} />
      </FieldPreviewRow>
    </Fields>;
}`,...($=(B=y.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const _n=["Main"];export{y as Main,_n as __namedExportsOrder,En as default};
//# sourceMappingURL=Select.stories-tvICPShx.js.map
