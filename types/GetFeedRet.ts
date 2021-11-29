export default interface GetFeedRet {
    certified: number;
    cmtnum: number;
    commentlist: object;
    conlist: Conlist[];
    content: string;
    createTime: string;
    created_time: number;
    editMask: number;
    fwdnum: number;
    has_more_con: number;
    isEditable: number;
    issigin: number;
    lbs: Lbs;
    name: string;
    pic: Pic[];
    pic_template: string;
    pictotal: number;
    right: number;
    rt_sum: number;
    secret: number;
    source_appid: string;
    source_name: string;
    source_url: string;
    t1_source: number;
    t1_subtype: number;
    t1_termtype: number;
    tid: string;
    ugc_right: number;
    uin: number;
    wbid: number;
}

interface Pic {
    absolute_position: number;
    b_height: number;
    b_width: number;
    curlikekey: string;
    height: number;
    pic_id: string;
    pictype: number;
    richsubtype: number;
    smallurl: string;
    unilikekey: string;
    url1: string;
    url2: string;
    url3: string;
    who: number;
    width: number;
}

interface Lbs {
    id: string;
    idname: string;
    name: string;
    pos_x: string;
    pos_y: string;
}

interface Conlist {
    con: string;
    type: number;
}
