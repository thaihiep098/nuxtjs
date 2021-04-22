import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios'
import NavModel from '~/models/nav'

@Module({
  name: 'nav',
  stateFactory: true,
  namespaced: true,
})
export default class Nav extends VuexModule {
  private navs: NavModel[] = [
    {
      id: 1,
      title: 'アカ1',
    },
    {
      id: 2,
      title: 'アカ2',
    },
    {
      id: 3,
      title: 'アカ3',
    },
  ]

  public get data() {
    return this.navs
  }

  @Mutation
  private set(navs: NavModel[]) {
    this.navs = navs
  }

  @Action
  public async fetch() {
    const { data } = await axios.get<NavModel[]>('')
    this.set(data)
  }
}
