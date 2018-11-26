import React from 'react';
import {
    Segment, Grid, Image, Header,
} from 'semantic-ui-react';
import SocailButtonGroup from './SocialButtonGroup';

const { Column, Row } = Grid;

const BlogHeaderStyle = {
    fontFamily: 'Chonburi',
    fontSize: 18,
};

const BlogContentStyle = {
    fontFamily: 'Prompt',
    fontSize: 14,
};

export default () => (
    <Segment vertical>
        <Grid>
            <Row>
                <Column>
                    <Image fluid src="/static/images/blog/cover.png" />
                </Column>
            </Row>
            <Row columns={2}>
                <Column only="computer" width={3}>
                    <Segment vertical>
                        <SocailButtonGroup vertical />
                    </Segment>
                </Column>
                <Column width={16} only="mobile tablet">
                    <Segment vertical>
                        <SocailButtonGroup vertical={false} />
                    </Segment>
                </Column>
                <Column mobile={16} computer={13}>
                    <Segment vertical>
                        <Header style={BlogHeaderStyle}>หน้าวีสวยอย่างเป็นธรรมชาติ</Header>
                        <div style={BlogContentStyle}>
                            <p>28 กรกฎาคม 2561</p>
                            <p>
                                ไฟลท์ทริปไวกิ้ง อพาร์ตเมนต์แจ๊สด็อกเตอร์ วิทย์โบว์ โทรโข่งพะเรออพาร์ตเมนท์
                                ปักขคณนาคอนเซ็ปต์แพนด้าคันถธุระ ฟรุต ดิสเครดิต ไวอะกร้าเลคเชอร์ซาดิสต์
                                สโลว์วอลนัทซังเตติ๋ม ไฮเทคคอรัปชั่นซินโดรม สเตเดียมบอร์ดเวณิกาเฟอร์นิเจอร์ตื้บ มอยส์เจอไรเซอร์
                                เลสเบี้ยนอิกัวนาสแล็กสตรอว์เบอร์รี ธุหร่ำบิล รอยัลตี้แคปอึ้มไวอากร้า เอาท์กาญจน์คาร์โก้หน่อมแน้มตอกย้ำ
                            </p>
                            <p>
                                ชีส คอนโทรลกิมจิ แฟรี่สไตล์สะกอมเนิร์สเซอรี ชนะเลิศ โปรเจ็กเตอร์ ฟาสต์ฟู้ด
                                แมคเคอเรลธรรมาแคชเชียร์แผดเผา พิซซ่าเหี่ยวย่น หงวนเอฟเฟ็กต์กัมมันตะฮาราคีรีแผดเผา
                                โค้กฟีดเพาเวอร์ ฮวงจุ้ย แคชเชียร์เรตติ้งจึ๊ก แก๊สโซฮอล์ไวกิ้ง
                                มินท์เก๊ะทาวน์เฮาส์แอ๊บแบ๊วพาสตา บูติคเกจิ สตีล
                            </p>
                            <p>
                                ทอล์คสตาร์ แจ๊สแอดมิสชัน กัมมันตะ ไอซียูเซอร์อัลบั้มโฟล์คพลานุภาพ สะเด่าแทกติคมาราธอน
                                ควิกแล็บต้าอ่วยรีดไถนางแบบ เวอร์รีสอร์ทเท็กซ์ แอคทีฟบอยคอตตรวจทาน มวลชนแฟร์คอมเมนท์
                                อีโรติกจ๊อกกี้จัมโบ้บาบูน แบคโฮเป่ายิงฉุบ แฮมเบอร์เกอร์คาแรคเตอร์เอ๋อพุทธศตวรรษแจ๊กพอต
                                ราเม็งฟรุตแรงดูดลีก ท็อปบูตวอฟเฟิล ตุ๊ก เบนโลแชมพูมอคค่าลีกแคมเปญ
                            </p>
                            <p>
                                ไฮไลท์ วีไอพีโต๋เต๋ เซลส์แมนวานิลาสี่แยก จุ๊ยแกสโซฮอล์รันเวย์มาร์ก คาร์โก้ฮาลาล โบรชัวร์สแควร์
                                สหัชญาณ แฟร์มินท์ หยวนดีพาร์ทเมนท์นู้ดอ่อนด้อย จิตเภทอุปการคุณเซ่นไหว้ พงษ์
                                เดชานุภาพสปอร์ตอันตรกิริยาฮาโลวีนแพนดา
                                โครนาคอลเล็กชั่นเซ่นไหว้ซินโดรม สุริยยาตรซิลเวอร์เปราะบางเจ๊าะแจ๊ะแฟรี
                                ไฮเอนด์แอปเปิลซีอีโอออทิสติก กระดี๊กระด๊าทอมเทวาฟีด
                            </p>
                            <p>
                                มาม่าฮองเฮาพาวเวอร์เทคโนแครตเทคโน แชมป์โอยัวะตื้บบอดี้ เสือโคร่ง คาวบอยรีไซเคิลไดเอ็ต
                                แชมปิยอง อพาร์ตเมนต์เที่ยงคืนจิ๊กโก๋ เห็นด้วยไฮเวย์เคสเอสเปรสโซยังไง แม่ค้าโอเพ่นแตงโมอพาร์ตเมนต์
                                พลานุภาพปักขคณนาแฟนซีละอ่อน สหรัฐแตงกวาหน่อมแน้ม อัลบัม สติ๊กเกอร์แจ็กพอต รีไทร์เยอร์บีราวิป
                                ชนะเลิศเวิลด์บูติกฟลุตบราไลฟ์เบิร์ดหลวงพี่ พาร์ตเนอร์โทรโข่งต่อรองมาร์คซีอีโอ
                            </p>
                        </div>
                    </Segment>
                </Column>
            </Row>
        </Grid>
    </Segment>
);
