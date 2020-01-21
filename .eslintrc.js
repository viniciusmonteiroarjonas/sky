module.exports = {
  env: {
    "es6": true,
  },
  parser: "@typescript-eslint/parser", /* Especifica o analisador ESLint */
  extends: [
    "plugin:@typescript-eslint/recommended" /* Usa as regras recomendadas do @typescript-eslint/eslint-plugin */,
    "prettier/@typescript-eslint", /* Usa eslint-config-prettier para desativar as regras ESLint do @ typescript-eslint / eslint-plugin que entrariam em conflito com o mais bonito */
    "plugin:prettier/recommended" /* Ativa eslint-plugin-prettier e eslint-config-prettier. Isso exibirá erros mais bonitos como erros do ESLint. Verifique se essa é sempre a última configuração na matriz extends. */
  ],
  parserOptions: {
    ecmaVersion: 2018, /* Permite a análise de recursos modernos do ECMAScript */
    sourceType: "module" /* Permite o uso de importações */
  },
  rules: {
    "no-dupe-args": 2, /* não permitir argumentos duplicados nas functiondefinições */
    //"no-extra-parens": 2, /* não permitir parênteses desnecessários */
    //"default-case": 2, /* requer casos padrão nas instruções do switch */
    "no-invalid-this": 2, /* proibir essas palavras-chave fora de classes ou objetos semelhantes a classes */
    "no-multi-spaces": 2, /* proibir vários espaços */
    "no-undef-init": 2, /* não permitir que variáveis de inicialização sejam indefinidas */
    "no-unused-vars": 2, /* não permitir variáveis não utilizadas */
    "no-use-before-define": 2, /* proibir o uso de variáveis antes que elas sejam definidas */
    "array-bracket-newline": 2, /* aplicar quebras de linha após abrir e antes de fechar colchetes de matriz */
    "array-bracket-spacing": 2, /* impor espaçamento consistente entre colchetes da matriz */
    "comma-spacing": 2, /* impor espaçamento consistente antes e depois de vírgulas */
    "no-multiple-empty-lines": 2, /* proibir várias linhas vazias */
    "semi-spacing": 2, /* impor espaçamento consistente antes e depois de ponto e vírgula */
    "semi-style": 2, /* impor a localização de ponto e vírgula */
    "arrow-spacing": 2, /* aplicar espaçamento consistente antes e depois da seta nas funções de seta */
    "prefer-const": 2, /* requerem declarações const para variáveis que nunca são reatribuídas depois de declaradas */
    /* Lugar para especificar regras ESLint. Pode ser usado para substituir regras especificadas nas configurações estendidas */
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    //"camelcase": "true",
    "@typescript-eslint/camelcase": ["error", { "properties": "never" }]
  }
};
