import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Lenta from "../components/landing/Lenta"
import Video from "../components/landing/Video"
import Heading from "../components/landing/Heading"
import Block from "../components/landing/Block"
import Feedback from "../components/landing/Feedback"
import LandingSwiper from "../components/landing/LandingSwiper"
import BlockSlider from "../components/landing/BlockSlider"
import Helmet from "react-helmet"

const Landing = () => {
  const data = [
    {
      image: "/landing/printerIcon.svg",
      lie: "Портят",
      truth: "Не портят принтеры",
      cartoon: "/landing/printer.svg",
      desc: "В России много дешёвых картриджей сомнительного качества. Мы бы и сами не рискнули поставить их в свои принтеры. А по данным многочисленных исследований, до 30% «оригинальных» картриджей на самом деле подделка.",
      footer: "Мы создаём картриджи из дорогих японских, американских и южно-корейских комплектующих. Наши сотрудники принимают и тестируют каждую партию прямо на заводе. Мы уверены в своих картриджах и гарантируем, что они не сломают принтер."
    },
    {
      image: '/landing/printerIcon2.svg',
      lie: 'Плохо',
      truth: 'Хорошо печатают',
      cartoon: '/landing/pallete.svg',
      desc: 'Ещё есть мнение, будто совместимые картриджи обязательно плохо печатают. Это тоже неправда. Для каждой модели картриджа мы подбираем лучшую пару тонер-фотовал. Учитываем совместимость с компонентами и результаты предыдущих тестов. Поставщики тонера Mitsubishi, Tomoegawa, Static Control, LG Chem.',
      footer: 'Новые модели картриджей проходят тесты на вертикальный и горизонтальный градиент, отсутствие фантомных изображений, равномерность заливки и общее качество печати.'
    },
    {
      image: '/landing/printerIcon3.svg',
      lie: 'Не сохраняют',
      truth: 'Сохраняют гарантию',
      cartoon: '/landing/robot.svg',
      desc: 'Некоторые производители принтеров пугают, что откажут в гарантии, если использовать совместимые картриджи. Однако отказать в гарантии в таком случае — противозаконно. Многие производители уже согласились с этим и подтвердили свою готовность обслуживать по гарантии.',
      footer: 'Производители обещают, что примут гарантийный принтер на диагностику. Если проблема не в совместимом картридже, его отремонтируют по гарантии. Если же принтер сломается по вине картриджа Т2, на него действует наша собственная гарантия: мы сами, за свой счёт, отремонтируем ваш принтер. Без вопросов.'
    }
  ];

  return (
    <Layout>
      <SEO title="Landing" />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js" />
      </Helmet>

      <Lenta />
      <Video />
      <Heading />

        <Block 
          image={data[0].image} 
          lie={data[0].lie} 
          truth={data[0].truth} 
          cartoon={data[0].cartoon}
          desc={data[0].desc} 
          footer={data[0].footer} 
          />

      <Feedback />

       <Block 
          image={data[1].image} 
          lie={data[1].lie} 
          truth={data[1].truth} 
          cartoon={data[1].cartoon}
          desc={data[1].desc} 
          footer={data[1].footer} 
          />
          
      <LandingSwiper />

      <Block 
          image={data[2].image} 
          lie={data[2].lie} 
          truth={data[2].truth} 
          cartoon={data[2].cartoon}
          desc={data[2].desc} 
          footer={data[2].footer} 
          />

    <BlockSlider/>

    </Layout>
  )
}

export default Landing
