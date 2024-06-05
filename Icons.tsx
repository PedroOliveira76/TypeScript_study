import { FaReact } from "react-icons/fa6";
import { TbBrandTypescript } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FunctionComponent } from "react";
import { MdAttachEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsToggle2Off } from "react-icons/bs";
import { BsToggle2On } from "react-icons/bs";

import styles from '../styles/Icons.module.css'

interface propIcon {
    nome: 'React' |
    'TypeScript' |
    'Mysql' |
    'Node' |
    'Email' |
    'Telefone' |
    'LinkedIn' |
    'GitHub' |
    'ToggleOff' |
    'ToggleOn';
    link?: string;

}
/* 
    Objeto com todos os ícones
    Caso queira adicionar mais, é necessário colocor um nome na Interface TypeScript, colocar no 
    objeto abaixo e importalo do React Icons ou qualquer de outro lugar.

*/
const iconMapping: Record<propIcon['nome'], JSX.Element> = {
    React: <FaReact className={styles.react} />,
    TypeScript: <TbBrandTypescript className={styles.type} />,
    Mysql: <SiMysql className={styles.mysql} />,
    Node: <FaNode className={styles.node} />,
    Email: <MdAttachEmail className={styles.email} />,
    Telefone: <FaWhatsapp className={styles.tel} />,
    LinkedIn: <FaLinkedin className={styles.linkedin} />,
    GitHub: <FaGithub className={styles.git} />,
    ToggleOff: <BsToggle2Off className={styles.toggle} />,
    ToggleOn: <BsToggle2On className={styles.toggle} />
};

const Icon: FunctionComponent<propIcon> = ({ nome, link }) => {

    /* 
        Aqui através da props eu consigo o nome do icone que foi passado e que corresponde no objento, 
        assim eu tenho o elemento em jsx do icone correspondente 
    */

    const IconComponent = iconMapping[nome];

    /* Caso esse ícone precise de link, essa lógica irá renderizar de acordo */
    return (
        (link ? (

            <a href={link} target="_blank" className={styles.link} >
                {IconComponent}
            </a>

        ) : (
            <>{IconComponent}</>
        )
        )


    )
};

export default Icon;
