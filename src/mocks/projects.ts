import linktree_light from '@/assets/images/projects/linktree/linktree_light.png';
import linktree_dark from '@/assets/images/projects/linktree/linktree_dark.png';

import portfolio_desktop from '@/assets/images/projects/portfolio/portfolio_desktop.png';
import portfolio_mobile from '@/assets/images/projects/portfolio/portfolio_mobile.png';

import xiloteca_desktop from '@/assets/images/projects/xilotecacesi/xiloteca_desktop.png';
import xiloteca_desktop_modal from '@/assets/images/projects/xilotecacesi/xiloteca_desktop_modal.png';
import xiloteca_mobile from '@/assets/images/projects/xilotecacesi/xiloteca_mobile.png';

import codescratch_desktop_home from '@/assets/images/projects/codescratch/codescratch_desktop_home.png';
import codescratch_desktop_class from '@/assets/images/projects/codescratch/codescratch_desktop_class.png';
import codescratch_mobile_home from '@/assets/images/projects/codescratch/codescratch_mobile_home.png';
import codescratch_mobile_class from '@/assets/images/projects/codescratch/codescratch_mobile_home.png';

export let projects = [
    {
        id: 4,
        title: 'CodeScratch',
        description: 'Plataforma de videaulas destinadas a suporte didático para o projeto Computação na Escola para Mulheres',
        repo: 'https://github.com/Elian-beep?tab=repositories&q=code-scratch&type=&language=&sort=',
        stacks: ['Node.js', 'Typescript', 'React.js'],
        images: [codescratch_desktop_home, codescratch_desktop_class, codescratch_mobile_home, codescratch_mobile_class],
        isShow: false,
    },
    {
        id: 3,
        title: 'Xiloteca CESI',
        description: 'Acervo virtual contendo os dados catalogados da Xiloteca situada na Universidade do Estado do Amazonas',
        repo: 'https://github.com/Elian-beep?tab=repositories&q=xiloteca&type=&language=&sort=',
        stacks: ['Java', 'Typescript', 'Vue.js'],
        images: [xiloteca_desktop, xiloteca_desktop_modal, xiloteca_mobile],
        isShow: false,
    },
    {
        id: 2,
        title: 'Portfólio - Linda',
        description: 'Portfólio desenvolvido para uma profissional de UX/UI que deseja exibir seus projetos e artigos relacionados a sua área',
        repo: 'https://github.com/Elian-beep/portfolio-hill',
        stacks: ['Typescript', 'Vue.js'],
        images: [portfolio_desktop, portfolio_mobile],
        isShow: false,
    },
    {
        id: 1,
        title: 'LinkTree',
        description: 'Meu próprio LinkTree desenvolvido em Vue.js a fim de centralizar meus principais links de conexão e exibição de informações para contato',
        repo: 'https://github.com/Elian-beep/my-link-tree',
        stacks: ['Typescript', 'Vue.js'],
        images: [linktree_light, linktree_dark],
        isShow: false,
    },
]