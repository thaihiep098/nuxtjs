import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import FaqModel from '~/models/faq'

@Module({
  name: 'faq',
  stateFactory: true,
  namespaced: true,
})
export default class Faq extends VuexModule {
  private list: FaqModel[] = []
  private sampleData: FaqModel[] = [
    {
      question: 'Iphone 11ターゲットを選択してくださ ?',
      answer: 'サンプル購入者の定期購入引上げ',
    },
    {
      question: 'Iphone 12ターゲださ ?',
      answer: '来場促進/来店促進',
    },
    {
      question: 'Iphone 13ターゲださ 2?',
      answer: '来場促進/来店促進',
    },
    {
      question: 'Iphone 14ターゲださ 3?',
      answer: '来場促進/来店促進',
    },
    {
      question: 'Iphone 15ターゲださ 4?',
      answer: '来場促進/来店促進',
    },
    {
      question: 'Iphone 16ターゲださ 5?',
      answer: '来場促進/来店促進',
    },
    {
      question: 'Iphone 11ターゲださ 6?',
      answer: '来場促進/来店促進',
    },
    {
      question: 'Iphone 11ターゲださ 7?',
      answer: '来場促進/来店促進',
    },
    {
      question: 'Iphone 11ターゲださ 8?',
      answer: '来場促進/来店促進',
    },
  ]

  get data() {
    return this.list
  }

  @Mutation
  private SET_DATA(data: any) {
    this.list = data
  }

  @Action
  public search(keyword: string) {
    const searchData = this.sampleData.filter((item) =>
      item.question.includes(keyword)
    )
    this.SET_DATA(searchData)
  }
}
