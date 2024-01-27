import "./App.css"
import MarkdownPreview from "@uiw/react-markdown-preview"

const source = `
# Configuración de Clave SSH y Primer Push en GitHub

#### Paso 1: Generar una nueva clave SSH
Este comando creará una nueva clave SSH utilizando el algoritmo Ed25519.
Se le pedirá que ingrese una frase de contraseña segura para proteger la clave.
> ssh-keygen -t ed25519 -C "tu_email@example.com"
#
#### Paso 2: Iniciar el agente SSH
Este comando inicia el agente SSH en segundo plano.
> eval "$(ssh-agent -s)"

#

#### Paso 3: Agregar la clave SSH al agente
Este comando añade la clave privada recién generada al agente SSH.
> ssh-add ~/.ssh/id_ed25519
#
#### Paso 4: Copiar la clave pública SSH
Este comando muestra la clave pública SSH en la terminal.
Deberás copiar este contenido y pegarlo en GitHub.
> cat ~/.ssh/id_ed25519.pub
#
#### Paso 5: Añadir la clave SSH a tu cuenta de GitHub
En este paso, debes ir a GitHub, navegar hasta la sección de claves SSH,
pegar la clave pública que copiaste anteriormente y guardar los cambios.
#
#### Paso 6: Verificar la configuración remota de Git
Este comando muestra la URL remota de tu repositorio Git.
> git remote -v 
#
##### Si es necesario, actualiza la URL remota con el siguiente comando:
> git remote set-url origin git@github.com:usuario/tu-repositorio.git
#
#### Paso 7: Realizar el primer push
Finalmente, realiza tu primer push al repositorio en GitHub.
> git push -u origin main

# Fin
`

function App() {
  return (
    <>
      <div
        style={{width: "60%", margin: "0 auto", textAlign: "left"}}
        data-color-mode="light">
        <MarkdownPreview source={source} />
      </div>
    </>
  )
}

export default App
