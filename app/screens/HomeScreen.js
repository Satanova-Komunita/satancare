import * as React from 'react'
import {Container, Row, Button} from '../components'
import {SCREENS} from '../constants'
import {useIdentity} from '../context'

export default function HomeScreen({navigation}) {
  const {identity, resetIdentity} = useIdentity()
  console.log('identity', identity)

  return (
    <Container>
      <Row>
        <Button label='Volba kandidáta' onPress={() => navigation.navigate(SCREENS.voteCandidate.name)}/>
      </Row>
      <Row>
        <Button label='Sabatní hlasování' onPress={() => navigation.navigate(SCREENS.voteSabatProposal.name)}/>
      </Row>
      <Row>
        <Button label='Odhlásit' onPress={() => {
          resetIdentity()
          navigation.navigate(SCREENS.login.name)
        }}/>
      </Row>
    </Container>
  )
}
