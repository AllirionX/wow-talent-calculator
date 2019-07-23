import './TalentSlot.scss'
import React, { FC } from 'react'
import { Icon } from './Icon'
import classNames from 'classnames'
import { Map } from 'immutable';
import { getPointsInSpec, calcMeetsRequirements } from '../lib/tree';

interface Props {
  talent: TalentData
  specId: number
  availablePoints: number
  /** All spent talents */
  knownTalents: Map<number, number>
  /** Disabled override */
  disabled?: boolean
  onClick?: (talentId: number) => void
  onRightClick?: (talentId: number) => void
}

const defaultProps: Partial<Props> = {
  onClick: () => undefined,
  onRightClick: () => undefined
}

const isAvailable = (talent: TalentData, specId: number, knownTalents: Map<number, number>): boolean => {
  // Dependent on other talents?
  if (!calcMeetsRequirements(talent, knownTalents)) {
    return false
  }
  const pointsInSpec = getPointsInSpec(specId, knownTalents)
  return talent.row * 5 <= pointsInSpec
}

export const TalentSlot: FC<Props> = (props) => {
  const { talent, specId, knownTalents, availablePoints } = props
  const points = knownTalents.get(talent.id, 0)
  const showPoints = points > 0 || availablePoints > 0
  const disabled = props.disabled || !showPoints || !isAvailable(talent, specId, knownTalents)

  const containerClassNames = classNames('talent', {
    'talent--disabled': !!disabled,
    'talent--available': !disabled && points < talent.ranks.length,
    'talent--maxed': points >= talent.ranks.length || (points > 0 && availablePoints === 0)
  })

  const pointsClassNames = classNames('point-label', {
    'point-label--enabled': !disabled
  })

  const handleContextMenu = (e) => {
    if (props.onRightClick) props.onRightClick(talent.id)
    e.preventDefault()
    return false
  }

  return (
    <div 
      className={containerClassNames}
      title={talent.ranks[0].toString()}
      data-row={talent.row}
      data-col={talent.col}
      onClick={!disabled ? () => props.onClick(talent.id) : () => {}}
      onContextMenu={handleContextMenu}
    >
      <div className="talent__status" />
      <Icon name={talent.icon} size="medium" />

      {showPoints && !disabled &&
        <div className={pointsClassNames}>
          {points}
          /{talent.ranks.length}
        </div>
      }
    </div>
  )
}

TalentSlot.defaultProps = defaultProps

;(TalentSlot as any).whyDidYouRender = true