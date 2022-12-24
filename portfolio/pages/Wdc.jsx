import styles from '../styles/Home.module.css'

export default function Wdc() {
  const newOBJ = [
    {
      display: 'Q.ENEST ホールディングス',
      image: 'images/qenest.jpg',
      path: '/webdesign',
      year: '2022'
    },
    {
      display: 'Qcells Brandsite',
      image: 'images/qcells.jpg',
      path: '/webdesign',
      year: '2022'
    },
    {
      display: 'NetChina Brandsite',
      image: 'images/netchina.jpg',
      path: '/webdesign',
      year: '2022'
    },
    {
      display: 'ソーラーメイト Brandsite',
      image: 'images/netchina.jpg',
      path: '/webdesign',
      year: '2022'
    },
    {
      display: '0円ソーラー比較ナビ',
      image: 'images/hikaku.jpg',
      path: '/webdesign',
      year: '2022'
    },
    {
      display: 'Q.SUPREME 製品ページ',
      image: 'images/qsupreme.jpg',
      path: '/webdesign',
      year: '2022'
    },
    {
      display: 'Q.ENESTでんき 節電キャンペーンLP',
      image: 'images/denkiLP.jpg',
      path: '/webdesign',
      year: '2022'
    },
    {
      display: 'JAC Recruitment 転職市場動向',
      image: 'images/JAC.jpg',
      path: '/webdesign',
      year: '2022'
    },
    {
      display: '須田町北部町会WEBSITE',
      image: 'images/sudakita.jpg',
      path: '/webdesign',
      year: '2021'
    },
    {
      display: '神田 下久呉服店',
      image: 'images/shimokyuu.jpg',
      path: '/webdesign',
      year: '2018'
    },
    {
      display: '東京呉服専門店協同組合',
      image: 'images/gomeikai.jpg',
      path: '/webdesign',
      year: '2018'
    },
  ];
  console.log(newOBJ);
  return (
    newOBJ.map ((el) =>
    <p>{el.display}</p>
    )
  )
}