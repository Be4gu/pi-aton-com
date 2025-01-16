import NextAuth from 'next-auth'
import TwitchProvider from 'next-auth/providers/twitch'

export const authOptions = {
  providers: [
    TwitchProvider({
      clientId: 'wwxt9pgipc5b84jqeti3zwah25zyyq',
      clientSecret: 'ty3ocsewssm3dkxhf3isvefqskas6w'
    })
  ]
}

export default NextAuth(authOptions)
