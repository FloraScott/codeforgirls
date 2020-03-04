var book = {
    name: 'Harry Potter',
    characters: ['Harry Potter, Ron Weasley, Hermione Granger, Voldemort'],
    author: 'JK Rowling'
    publicationdate: 1999
    noOfVolumes: 7
    noOfTimesharrybeatsvoldemort: 4

    question1: function () {
        console.log("Which one is the best")
    }
    percentageOfnoOfTimesharrybeatsvoldemortInnoOfVolumes: function () {
        return this.noOfVolumes / this.noOfTimesharrybeatsvoldemort * 100;
    }
}