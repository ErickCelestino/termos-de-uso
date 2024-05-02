import { Typography } from '@mui/material'
import { BaseLayout } from '../layout'

export const TermsOfUserContainer = () => {
    return (
        <BaseLayout title='Termos de Uso' pages={[{page: 'Contato', to: 'contact'}]}>
        <Typography>teste</Typography>
        </BaseLayout>
    )
}