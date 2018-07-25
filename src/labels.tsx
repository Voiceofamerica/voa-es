
import * as React from 'react'
import { push } from 'react-router-redux'
import store from 'redux-store'
import toggleCircumventionDrawer from 'redux-store/actions/toggleCircumventionDrawer'
import * as moment from 'moment'

import { setAnalyticsOptions } from '@voiceofamerica/voa-shared/helpers/analyticsBindings'
import { setDirection } from '@voiceofamerica/voa-shared/helpers/textDirectionHelper'

import { Audience } from 'helpers/graphql-types'

setAnalyticsOptions({
  language: 'spahish',
  languageService: 'spahish',
  propertyName: 'voa spahish news app',
  propertyId: 'something',
  rsidAccount: 'bbgvoa.spanish.streaming.app',
  reportSuite: 'bbgvoa.spanish.streaming.app',
})
setDirection('ltr')

export const graphqlAudience = Audience.es

moment.locale('es')

export const articleLabels = {
  updatedOn: (date: string) => `Actualizado en ${date}`,
  relatedContent: 'Contenido relacionado',
  shareMessage: '',
  galleryLoading: 'Cargando',
}

export const categorySettingsLabels = {
  header: 'Prioriza las categorías',
  myCategories: 'Mis categorías',
  allCategories: 'Todas las categorías',
  dragAndDrop: 'Arrastra tus categorías aquí',
  headlinesFirst: 'Titulares especificados primero',
  cancel: 'Cancel',
}

export const circumventionDrawerLabels = {
  enabledContent: (
    <div>
      <p>
      La Voz de América utiliza tecnología Psiphon VPN de "elusión" para encriptar las noticias que le entregamos. Psiphon evita que los observadores externos determinen su dirección IP, identidad y ubicación. Esta tecnología es confiable para más de 10 millones de usuarios.
      </p>
      <p>
        You can change this in
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>Settings</a>.
      </p>
    </div>
  ),
  disabledContent: (
    <div>
      <p>
      La Voz de América utiliza tecnología Psiphon VPN de "elusión" para encriptar las noticias que le entregamos. Psiphon evita que los observadores externos determinen su dirección IP, identidad y ubicación. Esta tecnología es confiable para más de 10 millones de usuarios.
      </p>
      <p>
        You can change this in
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>Settings</a>.
      </p>
    </div>
  ),
}

export const editorsChoiceLabels = {
  header: 'En portada',
}

export const errorBoundaryLabels = {
  error: 'Algo salió mal',
  retry: 'Intentar de nuevo',
}

export const favoritesSettingsLabels = {
  header: 'Favoritos',
  removeAll: 'Borrar todo',
}

export const homeLabels = {
  headlines: 'Titulares',
  search: 'Buscar',
  manage: '+',
}

export const introLabels = {
  content: '¡Bienvenido al mundo de VOA Noticias!',
  continue: 'Continuar',
}

export const mediaPlayerLabels = {
  empty: (
    <div>
      <p>
      Audio y videos que selecciones se reproducen aquí. Comienza por elegir de la lista a continuación. Puede cerrar esta pantalla sin detener el audio/video deslizando hacia abajo. Abra esta pantalla nuevamente deslizando hacia arriba desde el botón de reproducción redondo en el medio de la parte inferior de la pantalla. Inicie y detenga el audio o video tocando el botón reproducción.
      </p>
    </div>
  ),
  loading: 'Cargando',
}

export const mediaSettingsLabels = {
  normalSpeed: '1x',
  halfAgainSpeed: '1.5x',
  doubleSpeed: '2x',
  chooseSpeed: 'Velocidad de reproducción',
}

export const programsScreenLabels = {
  videos: 'Video',
  audio: 'Audio',
  empty: 'No hay contenidos',
}

export const psiphonLoadingLabels = {
  bold: 'Please be patient.',
  text: 'This may take a few minutes while we gather the best information for you.',
}

export const pullToRefreshLabels = {
  pull: 'Deslizar hacia abajo para refrescar',
  release: 'Deslizar hacia abajo para refrescar',
}

export const searchLabels = {
  header: 'Resultados de búsqueda',
  back: 'Atrás',
  all: 'Todos',
  query: 'Buscar',
  empty: 'No hay resultados',
}

export const settingsLabels = {
  header: 'Mi configuración',
  panic: 'Botón de pánico',
  sendToFriends: 'Comparte esta aplicación con tus amigos',
  sendFeedback: 'Enviar sus comentarios a VOA',
  aboutVoa: 'La Voz de América (VOA) publica noticias e información precisa, equilibrada y completa para una audiencia internacional. Comenzó en 1942 como un servicio de noticias de radio para las personas que vivían en sociedades devastadas por la guerra y desde entonces se ha convertido en una operación de noticias multimedia. VOA ahora llega a personas en web, dispositivos móviles y redes sociales en más de 40 idiomas.',
  feedbackEmail: 'editor@voanews.com',
  feedbackSubject: encodeURIComponent('Retroalimentación de lectores y usuarios'),
  feedbackBody: encodeURIComponent(''),
  shareMessage: 'Revisa esta aplicación',
  psiphon: 'Secure VPN',
  psiphonOn: 'On',
  psiphonOff: 'Off',
  takeEffectOnRestart: 'You must restart the app for your changes to take effect.',
  okay: 'Okay',
}

export const textSettingsLabels = {
  textSize: 'Establecer tamaño de letra',
  normalSize: '1x',
  largeSize: '1.5x',
  hugeSize: '2x',
}
