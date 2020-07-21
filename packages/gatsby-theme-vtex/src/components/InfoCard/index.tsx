/** @jsx jsx */
import { jsx, Box, Image } from 'theme-ui'
import { FC } from 'react'
import { Link } from 'gatsby'

interface Props {
  to: string
  headline?: string
  subhead?: string
  imgSrc: string
  imgAlt: string
}

const InfoCard: FC<Props> = ({
  headline,
  subhead,
  children,
  to,
  imgSrc,
  imgAlt,
}) => {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        px: '10px',
        background: '#e0efe0',
        textAlign: 'center',
        alignItems: 'center',
        maxHeight: '540px',
      }}
    >
      <Box sx={{ width: ['100%', '30%'] }}>
        {headline && (
          <div
            sx={{
              fontSize: 5,
              fontWeight: 'bold',
            }}
          >
            {headline}
          </div>
        )}
        {subhead && <div>{subhead}</div>}
        {children}
      </Box>
      <Box sx={{ width: ['0%', '70%'], display: ['none', 'inline'] }}>
        <Link to={to}>
          <Image
            sx={{
              maxHeight: '540px',
              width: '100%',
            }}
            alt={imgAlt}
            src={imgSrc}
            loading="lazy"
          />
        </Link>
      </Box>
    </div>
  )
}

export default InfoCard
