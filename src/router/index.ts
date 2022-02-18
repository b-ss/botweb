import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import CreateMsg from '../views/CreateMsg.vue'
import ViewMsg from '../views/ViewMsg.vue'
import ViewSession from '../views/ViewSession.vue'
import Favor from '../views/Favor.vue'
import ItcpIdx from '../views/itcp/Index.vue'
import ItcpSetting from '../views/itcp/Setting.vue'
import ItcpSettingRule from '../views/itcp/Rule.vue'
import ItcpSettingIgnore from '../views/itcp/Ignore.vue'
import ItcpSettingWhiteList from '../views/itcp/WhiteList.vue'
import ItcpSettingMark from '../views/itcp/Mark.vue'
import ItcpSettingTel from '../views/itcp/Tel.vue'
import ItcpSettingMsg from '../views/itcp/Msg.vue'
import SettingInfo from '../views/settingInfo/Index.vue'
import SettingInfoMsg from '../views/settingInfo/Msg.vue'
import SettingInfoColorMsg from '../views/settingInfo/ColorMsg.vue'
import SettingInfo5G from '../views/settingInfo/5G.vue'
import SettingInfoCardMsg from '../views/settingInfo/CardMsg.vue'
import SettingInfoDose from '../views/settingInfo/Dose.vue'
import PersonDetail from '../views/PersonDetail.vue'
import CommonDetail from '../views/CommonDetail.vue'
import Notice from '../views/Notice.vue'
import Application from '../views/application/Index.vue'
import ApplicationLocal from '../views/application/Local.vue'
import ApplicationNearby from '../views/application/Nearby.vue'
import ApplicationBlackList from '../views/application/BlackList.vue'
import CommonDetailSetting from '../views/CommonDetailSetting.vue'
import NotFoundComponent from '../views/NotFoundComponent.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/createMsg',
    name: 'createMsg',
    component: CreateMsg
  },
  {
    path: '/viewMsg/:userId',
    name: 'viewMsg',
    component: ViewMsg,
    props: true
  },
  {
    path: '/viewMsg/personDetail/:personId',
    name: 'personDetail',
    component: PersonDetail,
    props: true
  },
  {
    path: '/viewSession/:userId',
    name: 'viewSession',
    component: ViewSession,
    props: true
  },
  {
    path: '/viewSession/commonDetail/:personId',
    name: 'commonDetail',
    component: CommonDetail,
    props: true
  },
  {
    path: '/viewSession/commonDetail/:personId/setting',
    name: 'commonDetailSetting',
    component: CommonDetailSetting
  },
  {
    path: '/favor',
    name: 'favor',
    component: Favor,
  },
  {
    path: '/itcp',
    name: 'itcpIdx',
    component: ItcpIdx,

  },
  {
    path: '/itcp/setting',
    name: 'itcpSetting',
    component: ItcpSetting
  },
  {
    path: '/itcp/setting/rule',
    name: 'itcpSettingRule',
    component: ItcpSettingRule
  },
  {
    path: '/itcp/setting/whiteList',
    name: 'itcpSettingWhiteList',
    component: ItcpSettingWhiteList
  },
  {
    path: '/itcp/setting/ignore',
    name: 'itcpSettingIgnore',
    component: ItcpSettingIgnore
  },
  {
    path: '/itcp/setting/mark',
    name: 'itcpSettingMark',
    component: ItcpSettingMark
  },
  {
    path: '/itcp/setting/tel',
    name: 'itcpSettingTel',
    component: ItcpSettingTel
  },
  {
    path: '/itcp/setting/msg',
    name: 'itcpSettingMsg',
    component: ItcpSettingMsg
  },
  {
    path: '/settingInfo',
    name: 'settingInfo',
    component: SettingInfo
  },
  {
    path: '/settingInfo/msg',
    name: 'settingInfoMsg',
    component: SettingInfoMsg
  },
  {
    path: '/settingInfo/colorMsg',
    name: 'settingInfoColorMsg',
    component: SettingInfoColorMsg
  },
  {
    path: '/settingInfo/cardMsg',
    name: 'settingInfoCardMsg',
    component: SettingInfoCardMsg
  },
  {
    path: '/settingInfo/5G',
    name: 'settingInfo5G',
    component: SettingInfo5G
  },
  {
    path: '/settingInfo/dose',
    name: 'settingInfoDose',
    component: SettingInfoDose
  },
  {
    path: '/notice',
    name: 'notice',
    component: Notice
  },
  {
    path: '/application',
    name: 'application',
    component: Application
  },
  {
    path: '/application/local',
    name: 'applicationLocal',
    component: ApplicationLocal
  },
  {
    path: '/application/nearby',
    name: 'applicationNearby',
    component: ApplicationNearby
  },
  {
    path: '/application/blackList',
    name: 'applicationBlackList',
    component: ApplicationBlackList
  },

  {
    path: '/:pathMatch(.*)',
    component: NotFoundComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
