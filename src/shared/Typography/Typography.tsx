import styles from './styles.module.scss'

type TypographyVariant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'p_14_medium'
    | 'p_16_regular'

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant: TypographyVariant,
    children: React.ReactNode
}

const variantMapping: { [key in TypographyVariant]: keyof JSX.IntrinsicElements } = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p_14_medium: 'p',
    p_16_regular: 'p'
}

export const Typography = ({ variant, children }: TypographyProps) => {
    const Component = variantMapping[variant]

    return (
        <Component className={`${styles[variant]}`}>
            {children}
        </Component>
    )
}