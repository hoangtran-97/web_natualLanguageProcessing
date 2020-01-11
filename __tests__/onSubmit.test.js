import postData from '../src/client/js/postData';


describe('testing api', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('calls google and returns data to me', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

        //assert on the response
        postData("http://localhost:8081/sentiment").then(res => {
            expect(res.data).toEqual('12345')
        })

        //assert on the times called and arguments given to fetch
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual("http://localhost:8081/sentiment")
    })
})