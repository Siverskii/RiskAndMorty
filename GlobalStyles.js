import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,
blockquote,pre,a,abbr,
acronym,address,big,cite,code,del,dfn,em,img,ins,
kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,
center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,
thead,tr,th,td,article,aside,canvas,details,embed,figure,
figcaption,footer,header,hgroup,menu,nav,output,ruby,section,
summary,time,mark,audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
}
html{
  width: 100%;
  height: 100%;
  font-size: 16px;
}
body{
  width: 100%;
  height: 100%;
  user-select:none;
}
a, a:link, a:visited, a:focus, a:hover, a:active{
  color:#023d81;
  text-decoration:none; 
}
#__next{
  width: 100%;
  height: 100%;
}
`