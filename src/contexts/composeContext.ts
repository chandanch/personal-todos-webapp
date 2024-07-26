import { FC, ReactNode } from 'react';

interface IComposeContext {
    components?: FC<{ children?: ReactNode }>[];
    children?: ReactNode | undefined;
}

export function ComposeContext(props: IComposeContext) {
    const { components = [], children } = props;
}
