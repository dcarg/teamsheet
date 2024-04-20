'use client'

import { Button } from '@components/shadcn/button'

const CreateTeamButton = () => {
  return (
    <Button
      onClick={() => console.log('launch create modal')}
      variant="creative"
    >
      + Create
    </Button>
  )
}

export default CreateTeamButton