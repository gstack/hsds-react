import * as React from 'react'
import Card from '../Card'
import Text from '../Text'
import Truncate from '../Truncate'
import styled from '../styled'
import { classNames } from '../../utilities/classNames'
import { namespaceComponent } from '../../utilities/component'
import { COMPONENT_KEY } from './utils'
import css from './styles/ArticleCard.css.js'

export interface Props {
  className?: string
  content?: string
  contentLimit?: number
  contentSize?: number
  footer?: any
  metaHeader?: any
  title?: string
  titleLimit?: number
  titleSize?: number
}

/**
 * A enhanced wrapper that for Card, allowing for displaying a header, footer
 * and content inside a card
 */
class ArticleCard extends React.PureComponent<Props> {
  static defaultProps = {
    titleLimit: 120,
    contentLimit: 120,
    titleSize: 13,
    contentSize: 13,
  }

  renderTitle = () => {
    const { title, titleLimit, titleSize } = this.props

    return (
      title && (
        <div className="c-ArticleCard__title">
          <Text size={titleSize} weight="500">
            <Truncate limit={titleLimit} type="end">
              {title}
            </Truncate>
          </Text>
        </div>
      )
    )
  }

  renderContent = () => {
    const { content, contentLimit, contentSize } = this.props

    return (
      content && (
        <div className="c-ArticleCard__content">
          <Text
            size={contentSize}
            className="c-ArticleCard__contentText"
            block
            muted
          >
            <Truncate limit={contentLimit} type="end">
              {content}
            </Truncate>
          </Text>
        </div>
      )
    )
  }

  renderFooter = () => {
    const { footer } = this.props
    return footer && <div className="c-ArticleCard__footer">{footer}</div>
  }

  renderMetaHeader = () => {
    const { metaHeader } = this.props
    return (
      metaHeader && (
        <div className="c-ArticleCard__metaHeader">{metaHeader}</div>
      )
    )
  }

  render() {
    const {
      className,
      title,
      content,
      metaHeader,
      titleLimit,
      contentLimit,
      titleSize,
      contentSize,
      footer,
      ...rest
    } = this.props

    const componentClassName = classNames('c-ArticleCard', className)

    return (
      <Card {...rest} className={componentClassName}>
        {this.renderMetaHeader()}
        {this.renderTitle()}
        {this.renderContent()}
        {this.renderFooter()}
      </Card>
    )
  }
}

const StyledCard = styled(ArticleCard)(css)

namespaceComponent(COMPONENT_KEY)(StyledCard)

export default StyledCard
