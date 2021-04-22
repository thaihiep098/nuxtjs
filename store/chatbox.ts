import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios'
import ChatBoxModel from '~/models/chatbox'

@Module({
  name: 'chatbox',
  stateFactory: true,
  namespaced: true,
})
export default class ChatBox extends VuexModule {
  private messages: ChatBoxModel[] = []
  private exampleData: ChatBoxModel[] = [
    {
      message: 'すでに会員IDをお持ちの方',
      date: '2020-04-22',
      who: 1,
    },
    {
      message: 'SNSアカウントでログイン・新規会員登録したい場合はこちら。',
      date: '2020-04-22',
      who: 2,
    },
    {
      message: 'メールアドレスを入力して、アカウントを検索してください。',
      date: '2020-04-22',
      who: 2,
    },
    {
      message: '会員IDまたはパスワードをお忘れの方 へ',
      date: '2020-04-22',
      who: 1,
    },
    {
      message: '商品/サービス名称を入力してください',
      date: '2020-04-22',
      who: 2,
    },
    {
      message: '商品/サービスカテゴリを選択してください',
      date: '2020-04-22',
      who: 2,
    },
    {
      message: '商品・サービスカテゴリ細目を選択してください。',
      date: '2020-04-22',
      who: 1,
    },
  ]

  get data() {
    return this.messages
  }

  @Mutation
  private ADD_DATA(data: any) {
    this.messages.push(data)
  }

  @Action
  public addMessage() {
    const data = this.exampleData[
      Math.floor(Math.random() * this.exampleData.length)
    ]

    this.ADD_DATA(data)
  }

  @Action
  public async fetch() {
    const { data } = await axios.get('')

    this.ADD_DATA({
      message: data.title,
      date: new Date(),
    })
  }
}
