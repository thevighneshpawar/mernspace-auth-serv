function Welcome(name: string) {
    console.log('Welcome,' + name)

    const user = {
        name: 'vighnesh',
    }

    const u1 = user[name]

    return u1
}

Welcome('hello')
