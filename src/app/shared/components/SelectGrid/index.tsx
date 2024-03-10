import * as logos from '@logos/index'

import type { Sport } from '@prisma/client'

import GridItem from "./GridItem"

type SelectGridProps = {
  entityKey: string,
  entities: Sport[],
  hideTitles?: boolean,
}

const SelectGrid = async (props: SelectGridProps) => {
  const { entityKey, entities, hideTitles } = props

  const entityLogoKey = `${entityKey}Logos`
  const entityLogos = logos[entityLogoKey] || {}

  return (
    <div className="flex flex-wrap gap-2 justify-center w-full">
      {entities.map(entity => {
        const { id, key } = entity
        const entityLogo = entityLogos[key] || {}

        return (
          <GridItem
            key={id}
            entityLogo={entityLogo}
            entity={entity}
            hideTitle={hideTitles}
          />
        )
      })}
    </div>
  )
}

export default SelectGrid
