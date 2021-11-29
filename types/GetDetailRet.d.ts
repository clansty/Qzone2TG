export default interface GetDetailRet {

    ret: number;

    code: number;

    message: string;

    data: Data;

}


interface Data {

    cell_comm: CellComm;

    cell_userinfo: CellUserinfo;

    cell_id: CellId;

    cell_summary: CellSummary;

    cell_pic: CellPic;

    cell_operation: CellOperation;

    cell_visitor: CellVisitor;

    cell_forward_list: CellForwardList;

    attach_info: string;

    hasmore: number;

}


interface CellForwardList {

    num: number;

    isforward: number;

    fwdmans: any[];

    actionUrl: string;

    extendinfo: object;

    forwardkey: string;

}


interface CellVisitor {

    view_count: number;

    visitor_count: number;

    visitors: any[];

    mod: number;

    view_count_byfriends: number;

    myfriend_info: string;

}


interface CellOperation {

    busi_param: BusiParam_1;

    weixin_url: string;

    qq_url: string;

    share_info: ShareInfo_1;

    schema_info: SchemaInfo;

    recomm_cookie: object;

    click_stream_report: object;

    qboss_trace: string;

    custom_btn: any[];

    feed_report_cookie: FeedReportCookie;

    generic_url: string;

    bypass_param: object;

    droplist_cookie: object;

    rank_param: object;

    button_gif_url: string;

    offline_resource_bid: number;

}


interface FeedReportCookie {

    '1': string;

    '3': string;

}


interface SchemaInfo {

    actiontype: number;

    actionurl: string;

    downloadurl: string;

    appid: string;

    postparams: string;

    usepost: number;

    schemapageurl: string;

    appname: string;

    loadingpage: boolean;

    yingyongbao: boolean;

    master_actionurl: string;

}


interface ShareInfo_1 {

    title: string;

    summary: string;

    photourl: Photourl;

    ark_sharedata: ArkSharedata;

    action_url: string;

}


interface ArkSharedata {

    ark_id: string;

    view_id: string;

    ark_content: string;

}


interface Photourl {

    '0': Object_0;

    '1': Object_7;

    '11': Object_13;

}


type Object_13 = Object_0;


type Object_7 = Object_0;


interface Object_0 {

    url: string;

    width: number;

    height: number;

    focus_x: number;

    focus_y: number;

    enlarge_rate: number;

    size: number;

    md5: string;

}


type Object_12 = Object_0;


type Object_4 = Object_0;


interface BusiParam_1 {

    '16': string;

    '30': string;

    '47': string;

    '51': string;

    '184': string;

}


interface CellPic {

    picdata: Picdata[];

    albumname: string;

    albumid: string;

    albumnum: number;

    uploadnum: number;

    albumrights: number;

    albumquestion: string;

    albumanswer: string;

    desc: string;

    uin: number;

    balbum: boolean;

    lastupdatetime: number;

    busi_param: object;

    qunid: string;

    allow_access: number;

    anonymity: number;

    albumtype: number;

    actiontype: number;

    actionurl: string;

    isSubscribe: boolean;

    friendinfo: Friendinfo;

    news: string;

    unread_count: number;

    facemans: any[];

    faceman_num: number;

    store_appid: string;

    extend_actiontype: number;

    extend_actionurl: string;

    albshowmask: number;

    allow_share: number;

    individualalbum: number;

    activealbum: number;

    newestupload: number;

    is_share: boolean;

    is_video_pic_mix: boolean;

    is_contain_video_and_pic: boolean;

    is_share_owner: boolean;

    animation_type: number;

    sort_type: number;

    is_topped_album: boolean;

}


type Friendinfo = User;


interface OpenidUsers {

    openid: string;

    nickname: string;

    logo: string;

}


type AuthqzoneMedalInfo_1 = MedalInfo;


type LiveshowMedalInfo_1 = MedalInfo;


interface StuCombineDiamondInfo {

    iShowType: number;

    iVipLevel: number;

    isAnnualVip: number;

    isAnnualVipEver: number;

}


interface StuStarInfo {

    iStarStatus: number;

    iStarLevel: number;

    isAnnualVip: number;

    isHighStarVip: number;

}


interface MedalInfo {

    medal_type: number;

    medal_state: number;

    level: number;

    pic_url: string;

    jump_url: string;

}


interface Picdata {

    picname: string;

    sloc: string;

    lloc: string;

    photourl: Photourl;

    type: number;

    ismylike: boolean;

    likecount: number;

    commentcount: number;

    busi_param: BusiParam;

    clientkey: string;

    isIndependentUgc: number;

    opsynflag: number;

    uUploadTime: number;

    modifytime: number;

    desc: string;

    orglikekey: string;

    curlikekey: string;

    cropinfo: Cropinfo;

    uploadUin: number;

    shoottime: number;

    flag: number;

    poi: Poi;

    facelist: any[];

    raw: number;

    isAutoPlayGif: boolean;

    photoTag: any[];

    opmask: number;

    albumid: string;

    piccategory: number;

    videoflag: number;

    videodata: Videodata;

    isCoverPic: boolean;

    pic_host_nick: PicHostNick;

    luckyMoneyDesc: string;

    geo: Geo;

    operation: Operation;

    musicdata: Musicdata;

    audio_summary: string;

    batchid: number;

    quankey: string;

    origin_size: number;

    origin_width: number;

    origin_height: number;

    origin_phototype: number;

    binaryExtInfo: object;

    vecShowDryingTagInfo: any[];

    fashion_tag_key: string;

}


interface Musicdata {

    musicid: string;

    musicurl: string;

    coverurl: string;

    width: number;

    height: number;

    title: string;

    musictime: number;

    musicMId: string;

    musicType: string;

    musicMUrl: string;

}


interface Operation {

    busi_param: object;

    weixin_url: string;

    qq_url: string;

    share_info: ShareInfo;

    schema_info: SchemaInfo;

    recomm_cookie: object;

    click_stream_report: object;

    qboss_trace: string;

    custom_btn: any[];

    feed_report_cookie: object;

    generic_url: string;

    bypass_param: object;

    droplist_cookie: object;

    rank_param: object;

    button_gif_url: string;

    offline_resource_bid: number;

}


interface ShareInfo {

    title: string;

    summary: string;

    photourl: object;

    ark_sharedata: ArkSharedata;

    action_url: string;

}


type Geo = Poi;


interface PicHostNick {

    uin: number;

    nick: string;

}


interface Videodata {

    videoid: string;

    videourl: string;

    coverurl: object;

    actiontype: number;

    actionurl: string;

    clientkey: string;

    filetype: number;

    videotype: number;

    videotime: number;

    videourls: object;

    playtype: number;

    videostatus: number;

    toast: string;

    extendinfo: object;

    videoremark: Videoremark;

    video_show_type: number;

    isPanorama: boolean;

    video_source: number;

    sloc: string;

    lloc: string;

    report_video_feeds_type: number;

    videoplaycnt: number;

    is_share: boolean;

    adv_delay_time: number;

    video_webview_url: string;

    isOnWifiPlay: boolean;

    isHadSetPlayOnWifi: boolean;

    auto_refresh_second: number;

    vcCovers: any[];

    video_form: number;

    gaussPicUrl: object;

    weishi: Weishi;

    stKingCard: StKingCard;

    bottom_button: BottomButton;

    video_click_type: number;

    header_desc: string;

    video_rate_list: any[];

    cur_video_rate: number;

}


interface BottomButton {

    text: string;

    actiontype: number;

    actionurl: string;

    button_img: string;

    button_background_img: string;

    button_icon: string;

    stMapABTest: object;

    appear_time: number;

    duration_time: number;

}


interface StKingCard {

    is_guide: boolean;

    button_title: string;

    jump_url: string;

}


interface Weishi {

    weishi_feedId: string;

    weishi_fileId: string;

    cover_url: string;

    nick_name: string;

    weishi_musicId: string;

    weishi_musicName: string;

    weishi_musicUrl: string;

    weishi_topicID: string;

    weishi_topicName: string;

    weishi_topicUrl: string;

    weishi_schema: string;

    dc_report: object;

}


interface Videoremark {

    iconurl: string;

    icondesc: string;

    remark: string;

    actiontype: number;

    actionurl: string;

    orgwebsite: number;

}


interface Poi {

    poi_id: string;

    poi_x: string;

    poi_y: string;

    poi_name: string;

    poi_address: string;

    poi_type: number;

    region_name: string;

}


interface Cropinfo {

    centerx_scale: number;

    centery_scale: number;

}


interface BusiParam {

    '6': string;

    '30': string;

    '35': string;

    '144': string;

    '-1': string;

}


type Object_11 = Object_0;


type Object_1 = Object_0;


interface CellSummary {

    summary: string;

    hasmore: number;

    actiontype: number;

    summarypic: any[];

    more_info: string;

    sparkleword: Sparkleword;

    mapExt: object;

    mapProtoExt: MapProtoExt;

    actionurl: string;

}


interface MapProtoExt {

    TO_UGCSVR_FOR_FONT: any[];

}


interface Sparkleword {

    sparkle_color: any[];

    span_time: number;

    extend_info: object;

    sparkle_id: string;

    sparkle_json: string;

}


interface CellId {

    cellid: string;

    subid: string;

}


interface CellUserinfo {

    user: User;

    action_desc: string;

    actiontype: number;

    luckyMoneyPics: any[];

}


interface User {

    uin: number;

    nickname: string;

    timestamp: number;

    from: number;

    uinkey: string;

    logo: string;

    vip: number;

    level: number;

    viplevel: number;

    viptype: number;

    qzonedesc: string;

    is_owner: number;

    operation_mask: number;

    uid: string;

    talk_id: string;

    portrait_id: number;

    is_own: number;

    isFamousWhite: number;

    isQzoneUser: number;

    isAnnualVip: number;

    isSetNickGlint: number;

    medalInfo: MedalInfo;

    descicon: string;

    icon_width: number;

    icon_height: number;

    isSweetVip: number;

    stuStarInfo: StuStarInfo;

    stuCombineDiamondInfo: StuCombineDiamondInfo;

    isSafeModeUser: number;

    vipShowType: number;

    namePlate: number;

    actiontype: number;

    actionurl: string;

    decoration: any[];

    tagInfos: any[];

    strPortraitId: string;

    under_nickname_desc: string;

    liveshowMedalInfo: LiveshowMedalInfo;

    uFansCount: number;

    uVisitorCount: number;

    isCmtVerifyOpen: number;

    iCurUserType: number;

    displayflag: number;

    vtime: number;

    authqzoneMedalInfo: AuthqzoneMedalInfo;

    eUserTypeReport: number;

    iVipActType: number;

    openid_users: OpenidUsers;

    sex: number;

}


type AuthqzoneMedalInfo = MedalInfo;


type LiveshowMedalInfo = MedalInfo;


interface CellComm {

    appid: number;

    subid: number;

    refer: string;

    time: number;

    actiontype: number;

    actionurl: string;

    originaltype: number;

    operatemask: number;

    feedskey: string;

    orglikekey: string;

    curlikekey: string;

    feedstype: number;

    feedsattr: number;

    ugckey: string;

    clientkey: string;

    show_mask: number;

    uflag: number;

    shield: number;

    ugcrightkey: string;

    interestkey: string;

    recomtype: number;

    feedsid: string;

    adv_stytle: number;

    adv_subtype: number;

    right_info: RightInfo;

    recomlayout: number;

    recomreportid: number;

    space_right: number;

    reportfeedsattr: number;

    recom_show_type: number;

    wup_feeds_type: number;

    stMapABTest: object;

    is_stay: boolean;

    paykey: string;

    operatemask2: number;

    positionmask: number;

    positionmask2: number;

    editmask: number;

    custom_droplist: any[];

    extendInfo: object;

    feedsattr2: number;

    feedsDelTime: number;

    sqDynamicFeedsKey: string;

    iClick_area: number;

    extendInfoData: object;

    hot_score: number;

    is_kuolie: boolean;

}


interface RightInfo {

    ugc_right: number;

    allow_uins: any[];

}



