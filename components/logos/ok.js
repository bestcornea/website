const OkLogo = ({ className="h-24", brand=false }) => (
  <svg version="1.1" viewBox="4 -24 62 90" xmlns="http://www.w3.org/2000/svg" className={className}>
 <g transform="translate(493.17 283.58)">
  <g transform="matrix(1.9502 0 0 1.9502 -853.44 -502.29)">
   <path d="m187.32 115.19v7.3768c4.7149-3.6354 9.9713-5.376 15.203-5.4121 5.393-0.0371 10.759 1.7367 15.477 5.1072v-7.0719zm15.178 4.8938a8.2018 8.2018 0 0 0-8.2016 8.2016 8.2018 8.2018 0 0 0 8.2016 8.2021 8.2018 8.2018 0 0 0 8.2021-8.2021 8.2018 8.2018 0 0 0-8.2021-8.2016zm-15.178 14.55v7.691h30.679v-7.3861c-9.2943 6.64-21.104 7.0781-30.679-0.30489z" fill={ brand ? "#6e90a6" : "currentColor"} fillOpacity={brand ? "1" : "0.6"}/>
   <circle cx="202.5" cy="128.29" r="3.7901" fill="#000"/>
   <circle cx="207.05" cy="132.15" r="2.299" fill="#fff"/>
  </g>
 </g>
</svg>
)

export default OkLogo
