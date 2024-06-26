import _ from 'lodash'
import { getUserByUserName } from '../../../src/function/mock/02-user'

describe('Spy library', () => {
  it('Should be called from findIndex with spy', () => {
    const keyword = 'barney'

    const findIndexSpy = jest.spyOn(_, 'findIndex').mockReturnValue(2)

    getUserByUserName(keyword)

    expect(findIndexSpy).toHaveBeenCalled()
  })

  it('Should be return user info from keyword with spy', () => {
    const keyword = 'barney'

    jest.spyOn(_, 'findIndex').mockReturnValue(2)

    const actual = getUserByUserName(keyword)

    // expect(findIndexSpy).toHaveBeenCalled()
    expect(actual).toMatchObject({
      user: 'pebbles',
      birthday: '2000-01-01',
      age: 27
    })
  })
})
