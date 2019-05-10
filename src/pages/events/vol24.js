import React from 'react'
import styled from 'styled-components'

import { mq } from '../../components/styles/'
import LayoutContainer from '../../components/utils/LayoutContainer'
import {
  ContentsCcntainer,
  ContentsInner,
  SectionContainer,
  GridCcntainer,
  GridItem,
} from '../../components/utils/Containers'
import Seo from '../../components/utils/Seo'
import { Spercer } from '../../components/utils/Spercer'
import PrimaryText from '../../components/atoms/PrimaryText'
import Hero from '../../components/molecules/Hero'
import Infomation from '../../components/molecules/Infomation'
import MemberBlock from '../../components/molecules/MemberBlock'
import Pagination from '../../components/molecules/Pagination'

import lineButton from '../../assets/images/line_button.png'
import qrImg from '../../assets/images/qr.png'
import umhr from '../../assets/images/member/umhr.png'
import cyan from '../../assets/images/member/cyan.png'
import kazzone from '../../assets/images/member/kazzone.png'
import conosyunya from '../../assets/images/member/conosyunya.png'
import sukiamaki from '../../assets/images/member/sukiamaki.png'

const dj = [
  {
    icon: umhr,
    name: 'umhr',
    detail:
      '2015年5月からオーガナイザーとして秋葉原MOGRAにてCtrl+Aを開始。\nJ-POPやエレクトロニカからジャンルの幅を広げていき、ジャンルレスでスムーズにミックスするスタイルを展開している。',
    social: [
      {
        name: 'twitter',
        link: '',
        account: '@umhr',
      },
    ],
  },
  {
    icon: kazzone,
    name: 'KAZZONE',
    detail:
      '2010年、DJ活動を沖縄G-shelterではじめ、後にTKGのレジデントDJをつとめる。そこでインターネットでかき集めたアニソンリミックスをメインにプレイするようになる。\n2015年、活動の場を東京へ移し、Ctrl+Aの始動に参画する。自身で作ったEditを武器にアニソン・J-POPをメインにプレイし、平日の夜を盛り上げる。\n「DJing x Engineering」をモットーにLED照明とそのコントロールソフトウェアを制作し、音楽だけにとどまらないクラブ内の空間演出を総合的に開拓している。',
    social: [
      {
        name: 'twitter',
        link: '',
        account: '@kazzone',
      },
      {
        name: 'SoundCloud',
        link: '',
        account: '@kazzone',
      },
      {
        name: 'Mixcloud',
        link: '',
        account: '@kazzone',
      },
    ],
  },
  {
    icon: conosyunya,
    name: 'CoNoSyuNya',
    detail:
      '1991年、石川県金沢市出身。ドラムンベースやエレクトロニカを主軸に独自の解釈で他の様々なジャンルを取り入れるプレイスタイルを得意とする。日々のスケッチを描き溜めた自身のサウンドクラウドは累計50万再生を記録。\nVJとしては、メディアアートを扱う経歴の中で培ったオーディオインタラクティヴの知識を応用し、「音を映像に変換する」表現を武器にソリッドでエクスペリメンタルな空間演出を得意とする。都内のベースミュージックシーンを中心にフロアを彩る姿は国内外でも評価を受けている。',
    social: [
      {
        name: 'twitter',
        link: '',
        account: '@conosyunya',
      },
      {
        name: 'SoundCloud',
        link: '',
        account: '@conosyunya',
      },
    ],
  },
]

const vj = [
  {
    icon: cyan,
    name: 'cyan',
    detail:
      '2015年初夏、都内を中心にVJ活動を開始。\n透明感のある映像で、スクリーンを照明と捉えて空間を演出します。',
    social: [
      {
        name: 'twitter',
        link: '',
        account: '@cyan',
      },
    ],
  },
  {
    icon: sukiamaki,
    name: 'sukiamaki',
    detail:
      '96年生まれ、東京田舎出身横浜田舎在住。高校3年間の青春とデータ通信量をクラブイベント配信に捧げ、浪人。当時のアニソンリミックスやネットレーベル音楽から影響を受ける。2016年よりVJ活動・2017年よりDJ活動を開始し、主に幾何学的な映像を好む。秋葉原や渋谷を中心に活動中。好きな食べ物は生ハム。',
    social: [
      {
        name: 'twitter',
        link: '',
        account: '@sukiamaki',
      },
    ],
  },
]

const infomation = {
  vol: '24 4th Anniversary',
  date: '2019.5.31. (Fri) 19:00 - 23:00',
  place: 'Akihabara Mogra',
  map: '',
  door: '¥2,500 (+1Drink)',
}

const IndexPage = () => (
  <LayoutContainer>
    <Seo
      title="Top"
      keywords={[`Ctrl+A`, `ctrla`, `club event`, `akihabara`, `dj`, `vj`]}
    />
    <SpTitle>
      Vol.24
      <br />
      Information
    </SpTitle>
    <Hero />
    <ContentsCcntainer>
      <ContentsInner>
        <SectionContainer>
          <GridCcntainer>
            <GridItem column={1}>
              <PcTitle>
                Vol.24
                <br />
                Information
              </PcTitle>
            </GridItem>
            <GridItem column={2}>
              <Infomation infomation={infomation} />
              <Spercer pcHeight={64} spHeight={40} />
              <PrimaryText>
                こんにちには、Ctrl+Aです。3年目最後のCtrl+Aは、沖縄にゆかりのあるポップスに強いDJさん御三方を招集しました。県外に出て活躍されてる方、沖縄に根付いてカルチャーを支えてきた方、沖縄の新しいシーンを盛り上げている方、各々の気持ちがあふれる素敵なイベントにできたらと思います！ぜひ遊びに来て下さいね◎
                <br />
                <br />
                【Date】
                <br /> ・3/22（金）19:00～23:00
                <br />
                <br />
                ※沖縄割あります：イベント当日から1週間以内の沖縄からの渡航券の提示で、Entrance
                Freeになる上、1ドリンクもプレゼントします。 <br />
                【Door】
                <br />
                ・¥2000＋1Drink
                <br />
                <br />
                【TimeTable】
                <br />
                19:00 - 19:40｜CoNoSyuNya
                <br />
                19:40 - 20:20｜Adapom
                <br />
                20:20 - 21:00｜umhr
                <br />
                21:00 - 21:40｜Tujii
                <br />
                21:40 - 22:20｜かのんびーつ
                <br />
                22:20 - 23:00｜KAZZONE
                <br />
                <br />
                【tag】
                <br />
                #ctrla
                <br />
                <br />
                【Discount】
                <br />
                イベントLINEアカウント登録で¥1500＋1Drink！
                <br />↓ アカウント追加方法 ↓<br />
                <br />
                1: スマホからこのボタンをタップ
                <br />
                <LineButton>
                  <img src={lineButton} />
                </LineButton>
                <br />
                <br />
                2: QRコードをLINEで友達追加
                <br />
                <QrImage>
                  <img src={qrImg} />
                </QrImage>
                <br />
                <br />
                3:LINEで「@ZNT8265G」をID検索して友達追加
              </PrimaryText>

              <section>
                <SectionHead>
                  <SectionHeading>【Guest DJ】</SectionHeading>
                </SectionHead>
                {dj.map(member => (
                  <MemberBlock key={member.name} member={member} />
                ))}
              </section>

              <section>
                <SectionHead>
                  <SectionHeading>【DJ】</SectionHeading>
                </SectionHead>
                {dj.map(member => (
                  <MemberBlock key={member.name} member={member} />
                ))}
              </section>

              <section>
                <SectionHead>
                  <SectionHeading>【VJ】</SectionHeading>
                </SectionHead>
                {vj.map(member => (
                  <MemberBlock key={member.name} member={member} />
                ))}
              </section>

              <section>
                <SectionHead>
                  <SectionHeading>【Access】</SectionHeading>
                  <PrimaryText>
                    ▼秋葉原mogra
                    <br />
                    〒110-0006 東京都台東区秋葉原3-11 B1 <br />
                    <a href="https://goo.gl/maps/urjrm" target="_blank">
                      https://goo.gl/maps/urjrm
                    </a>
                  </PrimaryText>
                </SectionHead>
                <MapFrame
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9816577793654!2d139.7728913152594!3d35.702068980189445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ea71928307d%3A0xe49b9244dc37e180!2z56eL6JGJ5Y6fIE1PR1JB!5e0!3m2!1sja!2sjp!4v1557402048633!5m2!1sja!2sjp"
                  width="682"
                  height="389"
                  frameborder="0"
                  style={{ border: '0' }}
                  allowfullscreen
                />
              </section>

              <Pagination nextlink="/" prevlink="/" />
            </GridItem>
          </GridCcntainer>
        </SectionContainer>
      </ContentsInner>
    </ContentsCcntainer>
  </LayoutContainer>
)

const LineButton = styled.a`
  display: block;
  width: 119px;
`

const QrImage = styled.span`
  display: block;
  width: 335px;
  ${mq.small`
    width: 100%;
  `}
`

const SectionHead = styled.div`
  margin: 60px 0 20px;
`

const SectionHeading = styled.h3`
  ${props => props.theme.mixins.font_text}
  img {
    margin-top: 0.5em;
  }
`

const MapFrame = styled.iframe`
  ${mq.small`
    width: 100% !important;
    height: 191px !important;
  `}
`

const PcTitle = styled.h1`
  margin-bottom: 66px;
  font-weight: 300;
  ${props => props.theme.mixins.font_prompt}
  ${props => props.theme.mixins.font_h1}
  ${mq.small`
    display: none
  `}
`

const SpTitle = styled.h1`
  margin-bottom: -5px;
  padding: 30px ${props => props.theme.sizes.sp.side_padding}% 0;
  background-color: ${props => props.theme.colors.background};
  font-weight: 300;
  ${props => props.theme.mixins.font_prompt}
  ${props => props.theme.mixins.font_h1}
  display: none
  ${mq.small`
    display: block
  `}
`

export default IndexPage
