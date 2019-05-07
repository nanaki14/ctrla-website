import React from 'react'
// import { Link } from 'gatsby'

import LayoutContainer from '../components/utils/LayoutContainer'
import {
  ContentsCcntainer,
  ContentsInner,
  SectionContainer,
  GridCcntainer,
  GridItem,
} from '../components/utils/Containers'
import Seo from '../components/utils/Seo'
import SectionTitle from '../components/atoms/SectionTitle'
import PrimaryText from '../components/atoms/PrimaryText'
import MoreLink from '../components/atoms/MoreLink'
import Hero from '../components/molecules/Hero'
import MemberItem from '../components/molecules/MemberItem'
import Infomation from '../components/molecules/Infomation'

import umhr from '../assets/images/member/umhr.png'
import cyan from '../assets/images/member/cyan.png'
import kazzone from '../assets/images/member/kazzone.png'
import conosyunya from '../assets/images/member/conosyunya.png'
import sukiamaki from '../assets/images/member/sukiamaki.png'

const members = [
  {
    icon: umhr,
    name: 'umhr',
    detail:
      '2015年5月からオーガナイザーとして秋葉原MOGRAにてCtrl+Aを開始。\nJ-POPやエレクトロニカからジャンルの幅を広げていき、ジャンルレスでスムーズにミックスするスタイルを展開している。',
    social: [
      {
        name: 'twitter',
        link: '',
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
      },
      {
        name: 'SoundCloud',
        link: '',
      },
      {
        name: 'Mixcloud',
        link: '',
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
      },
      {
        name: 'SoundCloud',
        link: '',
      },
    ],
  },
  {
    icon: cyan,
    name: 'cyan',
    detail:
      '2015年初夏、都内を中心にVJ活動を開始。\n透明感のある映像で、スクリーンを照明と捉えて空間を演出します。',
    social: [
      {
        name: 'twitter',
        link: '',
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
    <Hero />
    <ContentsCcntainer>
      <ContentsInner>
        <SectionContainer>
          <GridCcntainer>
            <GridItem column={1}>
              <SectionTitle>Next Event</SectionTitle>
            </GridItem>
            <GridItem column={2}>
              <Infomation infomation={infomation} />
              <MoreLink link="">More Details</MoreLink>
            </GridItem>
          </GridCcntainer>
        </SectionContainer>

        <SectionContainer id="about">
          <GridCcntainer>
            <GridItem column={1}>
              <SectionTitle>About</SectionTitle>
            </GridItem>
            <GridItem column={2}>
              <PrimaryText>
                Ctrl+Aは、秋葉原MOGRAにて奇数月の金曜日に開催されているDJイベントです。
                <br />
                「Ctrl+A」には文化の発信地である「Akihabara」を「包括する」という意味が込められ、アニメソングやポップス、インターネット音楽と、カラフルなビジュアル表現や照明演出で空間を彩るスタイルを得意としています。
                Ctrl+Aが秋葉原であなたの週末の始まりを「少し楽しくて」、「ちょっとオシャレ」な気持ちにするお手伝いをします。
              </PrimaryText>
            </GridItem>
          </GridCcntainer>
        </SectionContainer>

        <SectionContainer id="member">
          <GridCcntainer>
            <GridItem column={1}>
              <SectionTitle>Member</SectionTitle>
            </GridItem>
            <GridItem column={2}>
              {members.map(member => (
                <MemberItem key={member.name} member={member} />
              ))}
            </GridItem>
          </GridCcntainer>
        </SectionContainer>
      </ContentsInner>
    </ContentsCcntainer>
  </LayoutContainer>
)

export default IndexPage
