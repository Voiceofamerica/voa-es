
import {
  type as setPsiphonEnabledType,
  SetPsiphonEnabledAction,
} from '../actions/setPsiphonEnabled'

import {
  type as setCategoryOrderType,
  SetCategoryAction,
} from '../actions/setCategoryOrder'

import {
  type as setMediaPlaybackRateType,
  SetMediaPlaybackRateAction,
} from '../actions/setMediaPlaybackRate'

import {
  type as toggleDailyNotificationType,
  ToggleDailyNotificationAction,
} from '../actions/toggleDailyNotification'

import {
  type as setTextSizeType,
  SetTextSizeAction,
} from '../actions/setTextSize'

import { ActorMap, buildReducer } from '../actorMap'
import AppSettings from 'types/AppSettings'

const actors: ActorMap<AppSettings> = {
  [setPsiphonEnabledType]: (prev, { psiphonEnabled }: SetPsiphonEnabledAction) => ({
    ...prev,
    psiphonEnabled,
  }),
  [setCategoryOrderType]: (prev, { categories }: SetCategoryAction) => ({
    ...prev,
    categories,
  }),
  [setMediaPlaybackRateType]: (prev, { mediaPlaybackRate }: SetMediaPlaybackRateAction) => ({
    ...prev,
    mediaPlaybackRate,
  }),
  [toggleDailyNotificationType]: (prev, { on: dailyNotificationOn = !prev.dailyNotificationOn }: ToggleDailyNotificationAction) => ({
    ...prev,
    dailyNotificationOn,
  }),
  [setTextSizeType]: (prev, { textSize }: SetTextSizeAction) => ({
    ...prev,
    textSize,
  }),
}

/*
Estados Unidos https://www.voanoticias.com/z/360
Venezuela https://www.voanoticias.com/Venezuela
Inmigración https://www.voanoticias.com/z/4159
Internacionales https://www.voanoticias.com/z/358
América Latina https://www.voanoticias.com/z/359
Videos https://www.voanoticias.com/z/452
Economía https://www.voanoticias.com/z/400
Tecnología https://www.voanoticias.com/z/401
Entretenimiento https://www.voanoticias.com/z/387
Ciencia https://www.voanoticias.com/z/373
*/

export const INITIAL_STATE: AppSettings = {
  categories: [
    {
      id: 360,
      name: 'Estados Unidos',
    },
    {
      id: 4159,
      name: 'Inmigración',
    },
    {
      id: 358,
      name: 'Internacionales',
    },
    {
      id: 359,
      name: 'América Latina',
    },
    {
      id: 452,
      name: 'Videos',
    },
    {
      id: 400,
      name: 'Economía',
    },
    {
      id: 401,
      name: 'Tecnología',
    },
    {
      id: 387,
      name: 'Entretenimiento',
    },
    {
      id: 373,
      name: 'Ciencia',
    },
  ],
  mediaPlaybackRate: 1,
  dailyNotificationOn: true,
  psiphonEnabled: true,
  textSize: 1,
}

export default buildReducer(INITIAL_STATE, actors)
