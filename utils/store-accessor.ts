import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Nav from '~/store/nav'
import Faq from '~/store/faq'
import ChatBox from '~/store/chatbox'

// eslint-disable-next-line import/no-mutable-exports
let NavStore: Nav, FaqStore: Faq, ChatBoxStore: ChatBox

function initialiseStores(store: Store<any>): void {
  NavStore = getModule(Nav, store)
  FaqStore = getModule(Faq, store)
  ChatBoxStore = getModule(ChatBox, store)
}

export { initialiseStores, NavStore, FaqStore, ChatBoxStore }
