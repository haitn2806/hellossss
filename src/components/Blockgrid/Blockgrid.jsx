import React from "react";
import "./Blockgrid.css";
// import useDataApi from 'library/hooks/useDataApi';
// import Blockcard from 'components/Blockcard/Blockcard';
import BlockcardStyle from "./../Blockcard/Blockcard.style";

const Blockgrid = () => {
    // const { data } = useDataApi('/data/top-hotel.json');
    // console.log(data);

    return (
        <>
            <div className="blockgrid">
                <div className="grid1">
                    <BlockcardStyle className="itembig b1">
                        <div className="box-title">
                            <h1 className="card-h1">Classic</h1>
                            <hr className="box-hr" />
                        </div>
                        <div className="item-content">
                            <p>Hạ Long Bay</p>
                            <p>
                                Vịnh Hạ Long nằm ở Đông Bắc Việt Nam, cách thủ
                                đô Hà Nội 165km, thuộc địa phận tỉnh Quảng Ninh.
                                Đây là vùng biển đảo được xác định trong tọa độ
                                từ 106°56’ đến 107°37’ kinh độ Đông và 20°43’
                                đến 21°09’ vĩ độ Bắc với diện tích 1.553km² gồm
                                1.969 hòn đảo, trong đó 90% là đảo đá vôi. Phía
                                Bắc và Tây Bắc Vịnh Hạ Long kéo dài từ thị xã
                                Quảng Yên, qua thành phố Hạ Long, thành phố Cẩm
                                Phả, đến hết phần biển đảo huyện Vân Đồn; phía
                                Đông Nam và phía Nam giáp bờ Tây Vịnh Bắc Bộ,
                                phía Tây Nam giáp đảo Cát Bà (Hải Phòng). Vịnh
                                Hạ Long bao gồm cả vịnh Bái Tử Long. Vịnh Bái Tử
                                Long có giá trị tương đồng với khu Di sản thiên
                                nhiên thế giới vịnh Hạ Long về cảnh quan, địa
                                chất, địa mạo, đa dạng sinh học và văn hóa lịch
                                sử.
                            </p>
                        </div>
                    </BlockcardStyle>
                    <BlockcardStyle className="itemsmall s1">
                        <div className="box-title">
                            <h1 className="card-h1">Family</h1>
                            <hr className="box-hr" />
                        </div>
                        <div className="item-content">
                            <p>Hạ Long Bay</p>
                            <p>
                                Vịnh Hạ Long nằm ở Đông Bắc Việt Nam, cách thủ
                                đô Hà Nội 165km, thuộc địa phận tỉnh Quảng Ninh.
                                Đây là vùng biển đảo được xác định trong tọa độ
                                từ 106°56’ đến 107°37’ kinh độ Đông và 20°43’
                                đến 21°09’ vĩ độ Bắc với diện tích 1.553km² gồm
                                1.969 hòn đảo, trong đó 90% là đảo đá vôi. Phía
                                Bắc và Tây Bắc Vịnh Hạ Long kéo dài từ thị xã
                                Quảng Yên, qua thành phố Hạ Long, thành phố Cẩm
                                Phả, đến hết phần biển đảo huyện Vân Đồn; phía
                                Đông Nam và phía Nam giáp bờ Tây Vịnh Bắc Bộ,
                                phía Tây Nam giáp đảo Cát Bà (Hải Phòng). Vịnh
                                Hạ Long bao gồm cả vịnh Bái Tử Long. Vịnh Bái Tử
                                Long có giá trị tương đồng với khu Di sản thiên
                                nhiên thế giới vịnh Hạ Long về cảnh quan, địa
                                chất, địa mạo, đa dạng sinh học và văn hóa lịch
                                sử.
                            </p>
                        </div>
                    </BlockcardStyle>
                </div>
                <div className="grid1">
                    <BlockcardStyle className="itemsmall s2">
                        <div className="box-title">
                            <h1 className="card-h1">Beach</h1>
                            <hr className="box-hr" />
                        </div>
                        <div className="item-content">
                            <p>Hạ Long Bay</p>
                            <p>
                                Vịnh Hạ Long nằm ở Đông Bắc Việt Nam, cách thủ
                                đô Hà Nội 165km, thuộc địa phận tỉnh Quảng Ninh.
                                Đây là vùng biển đảo được xác định trong tọa độ
                                từ 106°56’ đến 107°37’ kinh độ Đông và 20°43’
                                đến 21°09’ vĩ độ Bắc với diện tích 1.553km² gồm
                                1.969 hòn đảo, trong đó 90% là đảo đá vôi. Phía
                                Bắc và Tây Bắc Vịnh Hạ Long kéo dài từ thị xã
                                Quảng Yên, qua thành phố Hạ Long, thành phố Cẩm
                                Phả, đến hết phần biển đảo huyện Vân Đồn; phía
                                Đông Nam và phía Nam giáp bờ Tây Vịnh Bắc Bộ,
                                phía Tây Nam giáp đảo Cát Bà (Hải Phòng). Vịnh
                                Hạ Long bao gồm cả vịnh Bái Tử Long. Vịnh Bái Tử
                                Long có giá trị tương đồng với khu Di sản thiên
                                nhiên thế giới vịnh Hạ Long về cảnh quan, địa
                                chất, địa mạo, đa dạng sinh học và văn hóa lịch
                                sử.
                            </p>
                        </div>
                    </BlockcardStyle>
                    <BlockcardStyle className="itemsmall s3">
                        <div className="box-title">
                            <h1 className="card-h1">Short trips</h1>
                            <hr className="box-hr" />
                        </div>
                        <div className="item-content">
                            <p>Hạ Long Bay</p>
                            <p>
                                Vịnh Hạ Long nằm ở Đông Bắc Việt Nam, cách thủ
                                đô Hà Nội 165km, thuộc địa phận tỉnh Quảng Ninh.
                                Đây là vùng biển đảo được xác định trong tọa độ
                                từ 106°56’ đến 107°37’ kinh độ Đông và 20°43’
                                đến 21°09’ vĩ độ Bắc với diện tích 1.553km² gồm
                                1.969 hòn đảo, trong đó 90% là đảo đá vôi. Phía
                                Bắc và Tây Bắc Vịnh Hạ Long kéo dài từ thị xã
                                Quảng Yên, qua thành phố Hạ Long, thành phố Cẩm
                                Phả, đến hết phần biển đảo huyện Vân Đồn; phía
                                Đông Nam và phía Nam giáp bờ Tây Vịnh Bắc Bộ,
                                phía Tây Nam giáp đảo Cát Bà (Hải Phòng). Vịnh
                                Hạ Long bao gồm cả vịnh Bái Tử Long. Vịnh Bái Tử
                                Long có giá trị tương đồng với khu Di sản thiên
                                nhiên thế giới vịnh Hạ Long về cảnh quan, địa
                                chất, địa mạo, đa dạng sinh học và văn hóa lịch
                                sử.
                            </p>
                        </div>
                    </BlockcardStyle>
                    <BlockcardStyle className="itemsmall s4">
                        <div className="box-title">
                            <h1 className="card-h1">Culinary</h1>
                            <hr className="box-hr" />
                        </div>
                        <div className="item-content">
                            <p>Hạ Long Bay</p>
                            <p>
                                Vịnh Hạ Long nằm ở Đông Bắc Việt Nam, cách thủ
                                đô Hà Nội 165km, thuộc địa phận tỉnh Quảng Ninh.
                                Đây là vùng biển đảo được xác định trong tọa độ
                                từ 106°56’ đến 107°37’ kinh độ Đông và 20°43’
                                đến 21°09’ vĩ độ Bắc với diện tích 1.553km² gồm
                                1.969 hòn đảo, trong đó 90% là đảo đá vôi. Phía
                                Bắc và Tây Bắc Vịnh Hạ Long kéo dài từ thị xã
                                Quảng Yên, qua thành phố Hạ Long, thành phố Cẩm
                                Phả, đến hết phần biển đảo huyện Vân Đồn; phía
                                Đông Nam và phía Nam giáp bờ Tây Vịnh Bắc Bộ,
                                phía Tây Nam giáp đảo Cát Bà (Hải Phòng). Vịnh
                                Hạ Long bao gồm cả vịnh Bái Tử Long. Vịnh Bái Tử
                                Long có giá trị tương đồng với khu Di sản thiên
                                nhiên thế giới vịnh Hạ Long về cảnh quan, địa
                                chất, địa mạo, đa dạng sinh học và văn hóa lịch
                                sử.
                            </p>
                        </div>
                    </BlockcardStyle>
                </div>
                <div className="grid1">
                    <BlockcardStyle className="itemsmall s5">
                        <div className="box-title">
                            <h1 className="card-h1">Adventure</h1>
                            <hr className="box-hr" />
                        </div>
                        <div className="item-content">
                            <p>Hạ Long Bay</p>
                            <p>
                                Vịnh Hạ Long nằm ở Đông Bắc Việt Nam, cách thủ
                                đô Hà Nội 165km, thuộc địa phận tỉnh Quảng Ninh.
                                Đây là vùng biển đảo được xác định trong tọa độ
                                từ 106°56’ đến 107°37’ kinh độ Đông và 20°43’
                                đến 21°09’ vĩ độ Bắc với diện tích 1.553km² gồm
                                1.969 hòn đảo, trong đó 90% là đảo đá vôi. Phía
                                Bắc và Tây Bắc Vịnh Hạ Long kéo dài từ thị xã
                                Quảng Yên, qua thành phố Hạ Long, thành phố Cẩm
                                Phả, đến hết phần biển đảo huyện Vân Đồn; phía
                                Đông Nam và phía Nam giáp bờ Tây Vịnh Bắc Bộ,
                                phía Tây Nam giáp đảo Cát Bà (Hải Phòng). Vịnh
                                Hạ Long bao gồm cả vịnh Bái Tử Long. Vịnh Bái Tử
                                Long có giá trị tương đồng với khu Di sản thiên
                                nhiên thế giới vịnh Hạ Long về cảnh quan, địa
                                chất, địa mạo, đa dạng sinh học và văn hóa lịch
                                sử.
                            </p>
                        </div>
                    </BlockcardStyle>
                    <BlockcardStyle className="itembig b2">
                        <div className="box-title">
                            <h1 className="card-h1">Cruise</h1>
                            <hr className="box-hr" />
                        </div>
                        <div className="item-content">
                            <p>Hạ Long Bay</p>
                            <p>
                                Vịnh Hạ Long nằm ở Đông Bắc Việt Nam, cách thủ
                                đô Hà Nội 165km, thuộc địa phận tỉnh Quảng Ninh.
                                Đây là vùng biển đảo được xác định trong tọa độ
                                từ 106°56’ đến 107°37’ kinh độ Đông và 20°43’
                                đến 21°09’ vĩ độ Bắc với diện tích 1.553km² gồm
                                1.969 hòn đảo, trong đó 90% là đảo đá vôi. Phía
                                Bắc và Tây Bắc Vịnh Hạ Long kéo dài từ thị xã
                                Quảng Yên, qua thành phố Hạ Long, thành phố Cẩm
                                Phả, đến hết phần biển đảo huyện Vân Đồn; phía
                                Đông Nam và phía Nam giáp bờ Tây Vịnh Bắc Bộ,
                                phía Tây Nam giáp đảo Cát Bà (Hải Phòng). Vịnh
                                Hạ Long bao gồm cả vịnh Bái Tử Long. Vịnh Bái Tử
                                Long có giá trị tương đồng với khu Di sản thiên
                                nhiên thế giới vịnh Hạ Long về cảnh quan, địa
                                chất, địa mạo, đa dạng sinh học và văn hóa lịch
                                sử.
                            </p>
                        </div>
                    </BlockcardStyle>
                </div>
            </div>
        </>
    );
};

export default Blockgrid;
