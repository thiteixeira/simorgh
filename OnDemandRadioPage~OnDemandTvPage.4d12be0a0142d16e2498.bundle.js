(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1447:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(41);var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),_bbc_psammead_media_player__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(275),ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_6__),_contexts_RequestContext__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(12),_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(7),Wrapper=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__.a)("div",{target:"e1a3lole0"})((function(props){return!props.hasBottomPadding&&"padding-bottom: ".concat(_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.f,";")})," @media (min-width:",_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_4__.i,"){",(function(props){return!props.hasBottomPadding&&"padding-bottom: ".concat(_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.l,";")}),"}"),AVPlayer=function AVPlayer(_ref){var assetId=_ref.assetId,placeholderSrc=_ref.placeholderSrc,title=_ref.title,embedUrl=_ref.embedUrl,iframeTitle=_ref.iframeTitle,type=_ref.type,skin=_ref.skin,className=_ref.className,hasBottomPadding=_ref.hasBottomPadding,showLoadingImage=_ref.showLoadingImage,darkMode=_ref.darkMode,_useContext=Object(react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_8__.a),translations=_useContext.translations,service=_useContext.service,_useContext2=Object(react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_RequestContext__WEBPACK_IMPORTED_MODULE_7__.a),isAmp=_useContext2.isAmp,platform=_useContext2.platform,isValidPlatform=["amp","canonical"].includes(platform),mediaInfo={title:title,type:type},noJsMessage=ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_6___default()("This ".concat(mediaInfo.type," cannot play in your browser. Please enable JavaScript or try a different browser."),["media","noJs"],translations);return isValidPlatform&&assetId?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper,{hasBottomPadding:hasBottomPadding,className:className},isAmp?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_bbc_psammead_media_player__WEBPACK_IMPORTED_MODULE_5__.a,{placeholderSrc:placeholderSrc,src:embedUrl,title:iframeTitle,skin:skin,noJsMessage:noJsMessage,service:service}):react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_bbc_psammead_media_player__WEBPACK_IMPORTED_MODULE_5__.b,{showPlaceholder:!1,showLoadingImage:showLoadingImage,darkMode:darkMode,src:embedUrl,title:iframeTitle,skin:skin,service:service,mediaInfo:mediaInfo,noJsMessage:noJsMessage,noJsClassName:"no-js"})):null},AudioPlayer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__.a)(AVPlayer,{target:"e1a3lole1"})("amp-iframe,div > iframe{width:calc(100% + ",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.f,");margin:0 -",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.e,";@media (min-width:",_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_4__.e,"){width:calc(100% + ",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.h,");margin:0 -",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.f,";}}");__webpack_exports__.a=function(props){return"audio"===props.skin?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AudioPlayer,props):react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AVPlayer,props)},AVPlayer.defaultProps={embedUrl:"",assetId:"",placeholderSrc:"",type:"",title:"",iframeTitle:"",className:"",skin:"classic",hasBottomPadding:!0,showLoadingImage:!1,darkMode:!1}},1450:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20),_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__),_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_bbc_psammead_headings__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(322),_bbc_psammead_visually_hidden_text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(34),_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4),_bbc_psammead_timestamp_container_utilities__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(133),_bbc_gel_foundations_typography__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(15),_bbc_psammead_styles_font_styles__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(16),_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(7),BrandTitle=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__.a)("span",{target:"eb9izc00"})("display:inline-block;width:100%;padding-bottom:",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_5__.e,";word-break:break-word;",_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_6__.l.LAPTOP_AND_LARGER,"{padding-bottom:0;word-break:break-word;line-height:",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_5__.j,";}"),Subheading=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__.a)("span",{target:"eb9izc01"})((function(_ref){var script=_ref.script;return script&&Object(_bbc_gel_foundations_typography__WEBPACK_IMPORTED_MODULE_8__.j)(script)})," ",(function(_ref2){var service=_ref2.service;return Object(_bbc_psammead_styles_font_styles__WEBPACK_IMPORTED_MODULE_9__.b)(service)})," margin:0;"),OnDemandHeadingContainer=function OnDemandHeadingContainer(_ref3){var idAttr=_ref3.idAttr,brandTitle=_ref3.brandTitle,releaseDateTimeStamp=_ref3.releaseDateTimeStamp,episodeTitle=_ref3.episodeTitle,ariaHidden=_ref3.ariaHidden,darkMode=_ref3.darkMode,className=_ref3.className,_useContext=Object(react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_10__.a),script=_useContext.script,service=_useContext.service,timezone=_useContext.timezone,datetimeLocale=_useContext.datetimeLocale,formattedTimestamp=Object(_bbc_psammead_timestamp_container_utilities__WEBPACK_IMPORTED_MODULE_7__.b)({timestamp:releaseDateTimeStamp,format:"LL",timezone:timezone,locale:datetimeLocale,isRelative:!1}),TextWrapper=ariaHidden?react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment:"span";return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_bbc_psammead_headings__WEBPACK_IMPORTED_MODULE_3__.a,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({script:script,service:service,id:idAttr,darkMode:darkMode,className:className},"content"===idAttr&&{tabIndex:"-1"},ariaHidden&&{as:"strong","aria-hidden":"true"}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextWrapper,ariaHidden?{}:{role:"text"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BrandTitle,null,brandTitle),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_bbc_psammead_visually_hidden_text__WEBPACK_IMPORTED_MODULE_4__.a,null,", "),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Subheading,{script:script,service:service},episodeTitle||formattedTimestamp)))};OnDemandHeadingContainer.defaultProps={idAttr:null,episodeTitle:null,ariaHidden:!1,darkMode:!1,className:""},OnDemandHeadingContainer.__docgenInfo={description:"",methods:[],displayName:"OnDemandHeadingContainer",props:{idAttr:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},episodeTitle:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},ariaHidden:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},darkMode:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},brandTitle:{type:{name:"string"},required:!0,description:""},releaseDateTimeStamp:{type:{name:"number"},required:!0,description:""}}},__webpack_exports__.a=OnDemandHeadingContainer,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/containers/OnDemandHeading/index.jsx"]={name:"OnDemandHeadingContainer",docgenInfo:OnDemandHeadingContainer.__docgenInfo,path:"src/app/containers/OnDemandHeading/index.jsx"})},1451:function(module,__webpack_exports__,__webpack_require__){"use strict";var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_bbc_psammead_paragraph__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(406),_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7),StyledParagraphComponent=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a)(_bbc_psammead_paragraph__WEBPACK_IMPORTED_MODULE_4__.a,{target:"e1oycz0u0"})("@media (max-width:",_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_3__.f,"){padding-bottom:",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_2__.e,";}"),OnDemandParagraphContainer=function OnDemandParagraphContainer(_ref){var idAttr=_ref.idAttr,text=_ref.text,darkMode=_ref.darkMode,_useContext=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_5__.a),script=_useContext.script,service=_useContext.service;return text?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledParagraphComponent,{script:script,service:service,id:idAttr,darkMode:darkMode},text):null};OnDemandParagraphContainer.defaultProps={idAttr:null,darkMode:!1},OnDemandParagraphContainer.__docgenInfo={description:"",methods:[],displayName:"OnDemandParagraphContainer",props:{idAttr:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},darkMode:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},text:{type:{name:"string"},required:!0,description:""}}},__webpack_exports__.a=OnDemandParagraphContainer,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/containers/OnDemandParagraph/index.jsx"]={name:"OnDemandParagraphContainer",docgenInfo:OnDemandParagraphContainer.__docgenInfo,path:"src/app/containers/OnDemandParagraph/index.jsx"})},1452:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(__filename){__webpack_require__.d(__webpack_exports__,"a",(function(){return EPISODE_STATUS}));__webpack_require__(35),__webpack_require__(113),__webpack_require__(8),__webpack_require__(11);var _lib_logger_node__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(67),_lib_logger_node__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_lib_logger_node__WEBPACK_IMPORTED_MODULE_4__),_lib_logger_const__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(68),logger=_lib_logger_node__WEBPACK_IMPORTED_MODULE_4___default()(__filename),EPISODE_STATUS={EPISODE_IS_AVAILABLE:"available",EPISODE_IS_NOT_YET_AVAILABLE:"not-yet-available",EPISODE_IS_EXPIRED:"expired"};EPISODE_STATUS.EPISODE_IS_AVAILABLE,EPISODE_STATUS.EPISODE_IS_EXPIRED,EPISODE_STATUS.EPISODE_IS_NOT_YET_AVAILABLE,EPISODE_STATUS.EPISODE_IS_NOT_YET_AVAILABLE,EPISODE_STATUS.EPISODE_IS_EXPIRED}).call(this,"/index.js")},1454:function(module,__webpack_exports__,__webpack_require__){"use strict";var helpers_extends=__webpack_require__(20),extends_default=__webpack_require__.n(helpers_extends),react=__webpack_require__(0),react_default=__webpack_require__.n(react),utilities_episodeAvailability=__webpack_require__(1452),styled_base_browser_esm=__webpack_require__(5),pathOr=__webpack_require__(8),pathOr_default=__webpack_require__.n(pathOr),esm=__webpack_require__(275),spacings=__webpack_require__(2),breakpoints=__webpack_require__(4),ServiceContext=__webpack_require__(7),AudioErrorWrapper=Object(styled_base_browser_esm.a)("div",{target:"euos1oz0"})("position:relative;min-height:165px;margin-bottom:",spacings.h,";"),VideoErrorWrapper=Object(styled_base_browser_esm.a)("div",{target:"euos1oz1"})("margin:",spacings.i," 0 ",spacings.l,";padding-top:","56.25%",";position:relative;overflow:hidden;@media (max-width:",breakpoints.f,"){margin-top:",spacings.f,";}@media (max-width:",breakpoints.d,"){margin:",spacings.f," -",spacings.f," 0;}@media (max-width:",breakpoints.b,"){margin:",spacings.e," -",spacings.e," 0;}"),ErrorMessage_getErrorMessage=function getErrorMessage(status,translations){return status===utilities_episodeAvailability.a.EPISODE_IS_EXPIRED?pathOr_default()("This content is no longer available",["media","contentExpired"],translations):pathOr_default()("This content is not yet available",["media","contentNotYetAvailable"],translations)},ErrorMessage_ErrorMessage=function ErrorMessage(_ref){var episodeAvailability=_ref.episodeAvailability,skin=_ref.skin,_useContext=Object(react.useContext)(ServiceContext.a),service=_useContext.service,translations=_useContext.translations,Wrapper="audio"===skin?AudioErrorWrapper:VideoErrorWrapper;return react_default.a.createElement(Wrapper,null,react_default.a.createElement(esm.c,{service:service,message:ErrorMessage_getErrorMessage(episodeAvailability,translations)}))};ErrorMessage_ErrorMessage.defaultProps={skin:"video"},ErrorMessage_ErrorMessage.__docgenInfo={description:"",methods:[],displayName:"ErrorMessage",props:{skin:{defaultValue:{value:"'video'",computed:!1},type:{name:"enum",value:[{value:"'audio'",computed:!1},{value:"'video'",computed:!1}]},required:!1,description:""},episodeAvailability:{type:{name:"enum",computed:!0,value:"Object.values(EPISODE_STATUS)"},required:!0,description:""}}};var episodeAvailability_ErrorMessage=ErrorMessage_ErrorMessage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/lib/utilities/episodeAvailability/ErrorMessage/index.jsx"]={name:"ErrorMessage",docgenInfo:ErrorMessage_ErrorMessage.__docgenInfo,path:"src/app/lib/utilities/episodeAvailability/ErrorMessage/index.jsx"});__webpack_exports__.a=function withMediaError(PageComponent){var MediaErrorComponent=function MediaErrorComponent(props){var episodeAvailability=props.pageData.episodeAvailability,mediaIsAvailable=episodeAvailability===utilities_episodeAvailability.a.EPISODE_IS_AVAILABLE;return react_default.a.createElement(PageComponent,extends_default()({},props,{mediaIsAvailable:mediaIsAvailable,MediaError:mediaIsAvailable?function(){return null}:function ErrorComponent(errorProps){return react_default.a.createElement(episodeAvailability_ErrorMessage,extends_default()({},errorProps,{episodeAvailability:episodeAvailability}))}}))};return MediaErrorComponent.defaultProps={pageData:null},MediaErrorComponent}}}]);
//# sourceMappingURL=OnDemandRadioPage~OnDemandTvPage.4d12be0a0142d16e2498.bundle.js.map