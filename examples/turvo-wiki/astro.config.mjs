// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Wiki Interna — Prefeitura de Turvo/PR',
			locales: { root: { label: 'Português (Brasil)', lang: 'pt-BR' } },
			customCss: ['./src/assets/custom.css'],
			social: [],
			sidebar: [
				{ label: 'Início', items: [{ slug: 'index' }] },
				{ label: 'Administração', items: [{ slug: 'setores/administracao' }] },
				{ label: 'Saúde', items: [{ slug: 'setores/saude' }] },
				{ label: 'Educação', items: [{ slug: 'setores/educacao' }] },
				{ label: 'Assistência social', items: [{ slug: 'setores/assistencia-social' }] },
				{ label: 'Tributação e engenharia', items: [{ slug: 'setores/tributacao-engenharia' }] },
				{ label: 'Controle e procuradoria', items: [{ slug: 'setores/controle-procuradoria' }] },
				{ label: 'Tecnologia da informação', items: [{ slug: 'setores/tecnologia' }] },
				{ label: 'Demais sistemas', items: [{ slug: 'setores/demais-sistemas' }] },
				{
					label: 'Operação da wiki',
					items: [
						{ slug: 'operacao/suporte' },
						{ slug: 'operacao/contribuicao' },
						{ slug: 'operacao/deploy-local' },
					],
				},
			],
		}),
	],
});
