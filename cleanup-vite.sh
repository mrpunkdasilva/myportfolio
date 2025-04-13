#!/bin/bash

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Iniciando limpeza dos arquivos Vite...${NC}"

# Lista de arquivos e diretórios para remover
files_to_remove=(
    "vite.config.js"
    "vite.config.ts"
    "index.html"
    "src/main.jsx"
    "src/main.tsx"
    "src/vite-env.d.ts"
    "public/vite.svg"
)

# Lista de dependências Vite para remover
deps_to_remove=(
    "vite"
    "@vitejs/plugin-react"
    "@vitejs/plugin-react-swc"
)

# Função para remover arquivos com segurança
remove_file() {
    if [ -f "$1" ]; then
        rm "$1"
        echo -e "${GREEN}Removido: $1${NC}"
    elif [ -d "$1" ]; then
        rm -r "$1"
        echo -e "${GREEN}Removido diretório: $1${NC}"
    else
        echo -e "${YELLOW}Não encontrado: $1${NC}"
    fi
}

# Remover arquivos
echo -e "\n${YELLOW}Removendo arquivos Vite...${NC}"
for file in "${files_to_remove[@]}"; do
    remove_file "$file"
done

# Remover dependências do package.json
echo -e "\n${YELLOW}Removendo dependências Vite do package.json...${NC}"
for dep in "${deps_to_remove[@]}"; do
    if grep -q "\"$dep\"" package.json; then
        npm uninstall "$dep"
        echo -e "${GREEN}Removida dependência: $dep${NC}"
    else
        echo -e "${YELLOW}Dependência não encontrada: $dep${NC}"
    fi
done

# Limpar scripts Vite do package.json
echo -e "\n${YELLOW}Atualizando scripts no package.json...${NC}"
# Usar temporário para manter formatação do JSON
jq 'del(.scripts.dev) | del(.scripts.build) | del(.scripts.preview)' package.json > temp.json && mv temp.json package.json

# Verificar e remover diretório dist se existir
if [ -d "dist" ]; then
    echo -e "\n${YELLOW}Removendo diretório dist...${NC}"
    rm -rf dist
    echo -e "${GREEN}Diretório dist removido${NC}"
fi

# Atualizar .gitignore
echo -e "\n${YELLOW}Atualizando .gitignore...${NC}"
# Remover linhas específicas do Vite
sed -i '/dist/d' .gitignore
sed -i '/dist-ssr/d' .gitignore

# Adicionar linhas específicas do Next.js
echo -e "\n${YELLOW}Adicionando configurações Next.js ao .gitignore...${NC}"
echo "# Next.js
.next/
out/
build/
.vercel" >> .gitignore

echo -e "\n${GREEN}Limpeza concluída!${NC}"
echo -e "${YELLOW}Recomendações:${NC}"
echo "1. Verifique se todos os componentes foram migrados corretamente"
echo "2. Certifique-se de que as rotas foram configuradas no padrão Next.js"
echo "3. Verifique se todos os imports foram atualizados"
echo "4. Execute 'npm run dev' para testar a aplicação"