import Image from "next/image";
import style from "@/styles/Faq.module.css";
import Tree from "@/styles/Tree.module.css";
import classNames from "classnames";
import type { NextPage } from "next";
import BioLink from "@/components/Tree/TreeNodeDetails/BioLink/BioLink";
import FaqQuestion from "@/components/FaqQuestion/FaqQuestion";
import personCard from "../public/personCard.png";
import personCard2 from "../public/personCard2.png";
import tree from "../public/tree.png";
import yellowCircle from "../public/yellowCircle.png";

const questions = [
  {
    question:
      "Se eu estiver na árvore, as informações sobre mim podem ser encontradas no mecanismo de pesquisa do Google?",
    answer: (
      <span>
        Não, a árvore não está indexada, então ninguém encontrará este site perguntando seu nome na barra de pesquisa.
        Mas se você inquieto porque seus dados estão na árvore, entre em contato para removê-lo da árvore ou reduzir as
        informações a um mínimo confortável{" "}
      </span>
    ),
  },
  {
    question: "Quero adicionar/remover/corrigir informações. Como fazer isso?",
    answer: (
      <BioLink
        href="https://wa.me/+5581996733973?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20site%20da%20sua%20árvore%20genealógica."
        text="Me envie uma mensagem para o meu WhatsApp"
        newTab={true}
      />
    ),
  },
  {
    question: "Informações sobre quais famílias já estão no projeto?",
    answer: (
      <span>
        Na <BioLink href="/families" text="Página de famílias" newTab={true} /> fornece uma lista completa de
        disponíveis dado momento das famílias. Cada sobrenome nesta lista é um link que você pode seguir para ver a
        árvore essa família. Algumas árvores são grandes, outras ainda são pequenas. Se de repente você quiser nos
        ajudar e complementar madeira,{" "}
        <BioLink
          href="https://wa.me/+5581996733973?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20site%20da%20sua%20árvore%20genealógica."
          text="Me envie uma mensagem para o meu WhatsApp"
          newTab={true}
        />
        .
      </span>
    ),
  },
  {
    question: "O que existe na página Árvore?",
    answer: (
      <span>
        Na <BioLink href="/tree" text="página da Árvore" newTab={true} /> você pode ver informações sobre as famílias e
        o tipo de árvore. A árvore contem cada nó de uma pessoa separada. A árvore é construída de cima para baixo, ou
        seja, as gerações mais antigas estão localizadas mais altas. Os filhos estão localizadas da esquerda para a
        direita do mais velho para mais novo.
        <br />
        <br />
        <div className={style.pictureWrapper}>
          <Image src={tree} layout="responsive" alt="imagem da árvore completa." />
        </div>
        <br />A árvore da familia <b>Pereira</b> é mostrada por padrão, mas você também pode ver árvores de outras
        famílias. Na <BioLink href="/families" text="página de Famílias" newTab={true} /> você pode ver uma lista de
        links para árvores outras famílias. E ao clicar em um membro da familia, você poderá ver um cartão onde há uma
        aba com o nome de
        <i>Famílias</i> lá existe uma lista das famílias que esta pessoa é descendente.
        <br />
        <br />
        <div className={style.pictureWrapper}>
          <Image src={personCard2} layout="responsive" alt="Card com a aba familia aparecendo." />
        </div>
      </span>
    ),
  },
  {
    question: "O que posso aprender sobre uma determinada pessoa? Onde consigo ver?",
    answer: (
      <span>
        Na <BioLink href="/tree" text="página da Árvore" newTab={true} /> você pode ver a árvore genealógica de uma
        familia. A árvore consiste de nós em forma de cards retangulares. Cada card exibe o nome da pessoa, ano de
        nascimento e ano de sua morte, caso tenha a pessoa já tenha falecido.
        <br />
        <br />
        <div className={style.pictureWrapper}>
          <Image src={tree} layout="responsive" alt="Árvore genealógica." />
        </div>
        <br />
        Além disso, ao clicar no card de uma pessoa especifica, abre-se um cartão com informações detalhadas sobre esta
        pessoa, onde você pode ver 3 abas: Biografia, Galeria e Famílias.
        <br />
        <br />
        <div className={style.pictureWrapper}>
          <Image src={personCard} layout="responsive" alt="Cartão com informações sobre a pessoa." />
        </div>
        <br />
        A aba Biografia contem informações sobre a data e local de nascimento, de óbito, parentes mais próximos pessoa
        (pais, cônjuges, filhos, irmãos e irmãs). Aqui também você pode encontrar informações sobre nacionalidade,
        educação, profissão e prêmios de uma pessoa e sua curta biografia (caso tenha).
        <br />
        <br />
        Na guia Galeria, você pode ver as fotos dessa pessoa.
        <br />
        <br />
        Na guia Famílias, você pode ver uma lista de famílias das quais essa pessoa é descendente. Cada nome é um link
        onde você será direcionado para a árvore daquela familia.
      </span>
    ),
  },
  {
    question: "Por que algumas pessoas tem um circulo amarelo ao redor de sua imagem?",
    answer: (
      <span>
        Alguns cards aparecem com um anel amarelo para informar que esta pessoa possui pais que não estão sendo mostrado
        naquela árvore.
        <br />
        <br />
        <div className={style.pictureWrapper}>
          <Image
            src={yellowCircle}
            layout="responsive"
            alt="Imagem do card com a foto e um circulo amarelo ao redor. "
          />
        </div>
        <br />
        Você pode abrir o cartão desta pessoa, ir na aba Famílias e ver quais famílias ele é descendente. Em cada
        sobrenome há uma referência à árvore daquela família.
        <br />
        <br />
        <div className={style.pictureWrapper}>
          <Image src={personCard2} layout="responsive" alt="Cartão com as informações dos descendentes." />
        </div>
      </span>
    ),
  },
  {
    question: "Posso compartilhar um link para uma árvore específica?",
    answer: (
      <span>
        Com certeza! Por padrão, a árvore genealógica <b>Pereira</b> é a que sempre irá aparecer primeiro, mas se você
        abrir outra árvore genealógica, copiar o link do navegador, então este link sempre levará a esta árvore.
      </span>
    ),
  },
];

const FaqPage: NextPage = () => (
  <div className={style.pageContainer}>
    <div className={style.content}>
      <div className={style.descriptionContainer}>
        <div className={classNames(style.titleContainer, style.descriptionItem)}>
          <div className={style.logoContainer}>
            <Image src="/favicon.ico" width={120} height={120} alt="logotipo do projeto da árvore" />
          </div>
          <span className={style.logoTitle}>Saiba Mais</span>
        </div>
        <div className={classNames(style.subtitleContainer, style.descriptionItem)}>
          <span>
            Não encontrou resposta para sua pergunta?{" "}
            <BioLink
              href="https://wa.me/+5581996733973?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20site%20da%20sua%20árvore%20genealógica."
              text="Entrar em contato."
              newTab={true}
            />{" "}
            Ficaremos felizes em ajudar, além de receber feedback valioso para tornar o site mais conveniente e
            compreensível.
          </span>
        </div>
      </div>
      <div className={style.questionsContainer}>
        {questions.map((item, index) => (
          <FaqQuestion key={index} question={item.question} answer={item.answer} isCollapsedByDefault={index > 0} />
        ))}
      </div>
    </div>
    <div className={style.imageContainer}>
      <div className={Tree.tree1} />
      <div className={Tree.tree2} />
      <div className={Tree.tree3} />
      <div className={Tree.tree4} />
      <div className={Tree.tree5} />
    </div>
  </div>
);

export default FaqPage;
