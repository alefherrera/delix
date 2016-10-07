;--------------------------------
;Incluimos el Modern UI

  !include "MUI2.nsh"

;--------------------------------
;Propiedades de la interfaz

  !define MUI_ABORTWARNING
  !define NOMBREAPP "delix"

;--------------------------------
#General

;Nombre de la aplicaci�n y del ejecutable
   Name "${NOMBREAPP}"
   Icon "favicon.ico"
   OutFile "DelixInstaller.exe"

;Directorio de instalaci�n
   DirText "Elija un directorio donde instalar la aplicaci�n:"
   InstallDir "$PROGRAMFILES\${NOMBREAPP}"

;Obtenemos el directorio del registro (si esta disponible)
   InstallDirRegKey HKCU "Software\Delix" ""

;Indicamos que cuando la instalaci�n se complete no se cierre el instalador autom�ticamente
   AutoCloseWindow false

;Si se encuentran archivos existentes se sobreescriben
   SetOverwrite on
   SetDatablockOptimize on

;--------------------------------
#Paginas
;p�ginas referentes al instalador
  !insertmacro MUI_PAGE_COMPONENTS
  !insertmacro MUI_PAGE_DIRECTORY
  !insertmacro MUI_PAGE_INSTFILES

;p�ginas referentes al desinstalador
  !insertmacro MUI_UNPAGE_CONFIRM
  !insertmacro MUI_UNPAGE_INSTFILES

;--------------------------------
#Lenguajes
;Definimos el idioma del instalador
  !insertmacro MUI_LANGUAGE "Spanish"

;--------------------------------

#Secciones

Section "Delix" delix

  SetOutPath "$INSTDIR"
;Hacemos que esta seccion tenga que instalarse obligatoriamente
  SectionIn RO

;Incluimos todos los archivos que componen nuestra aplicaci�n

  ;Archivos a instalar (solo archivos, los ejecutables van en la secci�n "prerequisitos"
  File delix.exe
  File "favicon.ico"
  File "bundle.js"
  File "bundle.js.map"
  File "index.html"


;Menu inicio
  SetShellVarContext all
  createDirectory "$SMPROGRAMS\${NOMBREAPP}"
    createShortCut "$SMPROGRAMS\${NOMBREAPP}\${NOMBREAPP}.lnk" "$INSTDIR\delix.exe" "" "$INSTDIR\favicon.ico"
    createShortCut "$SMPROGRAMS\${NOMBREAPP}\Desinstalar.lnk" "$INSTDIR\Uninstall.exe" "" ""

;Acceso directo en el escritorio
  CreateShortCut "$DESKTOP\${NOMBREAPP}.lnk" "$INSTDIR\${NOMBREAPP}.exe" "" "$INSTDIR\favicon.ico"

;Hacemos que la instalaci�n se realice para todos los usuarios del sistema
  SetShellVarContext all

;Guardamos un registro de la carpeta instalada
  WriteRegStr HKCU "Software\Delix" "" $INSTDIR

;Creamos un desintalador
  WriteUninstaller "$INSTDIR\Uninstall.exe"
SectionEnd


#Seccion desinstalador

Section "Uninstall"

SetShellVarContext all

;Borramos el ejecutable del men� inicio
  delete "$SMPROGRAMS\${NOMBREAPP}\${NOMBREAPP}.lnk"
  delete "$SMPROGRAMS\${NOMBREAPP}\Desinstalar.lnk"

;Borramos el acceso directo del escritorio
  delete "$DESKTOP\${NOMBREAPP}.lnk"

;Intentamos borrar el men� inicio (Solo se puede hacer si la carpeta est� vac�o)
  rmDir "$SMPROGRAMS\${NOMBREAPP}"

;Archivos a desinstalar
    delete $INSTDIR\delix.exe
    delete $INSTDIR\favicon.ico
    delete $INSTDIR\mysql.msi
    delete $INSTDIR\script.sql
    delete $INSTDIR\initdb.bat
    delete $INSTDIR\bundle.js
    delete $INSTDIR\bundle.js.map
    delete $INSTDIR\index.html

;Borramos el desinstalador
  delete $INSTDIR\Uninstall.exe

;Intentamos borrar la carpeta de instalaci�n (Solo se puede si est� vac�a)
  rmDir $INSTDIR

  DeleteRegKey /ifempty HKCU "Delix"

SectionEnd


#Seccion Prerequisitos, ejecucion de otros instaladores

Section "Prerequisitos" prerequisitos

SectionIn RO
;DetailPrint "Comenzando la instalacion de Mysql Server"
    ;File "X:\Delix\mysqlserver-5.6.26.exe"
    ;ExecWait "$INSTDIR\mysqlserver-5.6.26.exe"

;DetailPrint "Comenzando la instalacion de Java"
    ;File "X:\Delix\java.exe"
    ;ExecWait "$INSTDIR\java.exe"

DetailPrint "Comenzando la instalacion de MySql"
    File "mysql.msi"
    ExecWait '"msiexec" /i "$INSTDIR\mysql.msi" /quiet'

DetailPrint "Configurando la base de datos"
    File "initdb.bat"
    nsExec::Exec "$INSTDIR\initdb.bat"

SectionEnd

;--------------------------------
#Descripciones

  ;Descripcion de Delix
  LangString DESC_Delix ${LANG_SPANISH} "Archivos necesarios para la ejecuci�n de Delix"

  ;Descripcion de Prerequisitos
  LangString DESC_Prerequisitos ${LANG_SPANISH} "Archivos necesarios para que Delix funcione correctamente"

  ;Asignamos las descripciones a cada seccion
  !insertmacro MUI_FUNCTION_DESCRIPTION_BEGIN
    !insertmacro MUI_DESCRIPTION_TEXT ${Delix} $(DESC_Delix)
    !insertmacro MUI_DESCRIPTION_TEXT ${Prerequisitos} $(DESC_Prerequisitos)
  !insertmacro MUI_FUNCTION_DESCRIPTION_END

;--------------------------------
