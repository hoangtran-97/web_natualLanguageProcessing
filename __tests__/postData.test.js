import postData from '../src/client/js/postData';


describe('testing api', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('test postData', () => {
        fetch.mockResponseOnce(JSON.stringify({
            polarity: 'neutral',
            subjectivity: 'subjective',
            text: 'test',
            polarity_confidence: 0.6565799117088318,
            subjectivity_confidence: 0.7745829024578951
        }))
        postData("http://localhost:8081/sentiment").then(res => {
            expect(res.data).toEqual({
                polarity: 'neutral',
                subjectivity: 'subjective',
                text: 'test',
                polarity_confidence: 0.6565799117088318,
                subjectivity_confidence: 0.7745829024578951
            })
        })
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual("http://localhost:8081/sentiment")
    })
})