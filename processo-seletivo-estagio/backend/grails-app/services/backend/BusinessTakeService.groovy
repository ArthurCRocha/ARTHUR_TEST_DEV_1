package backend

import grails.gorm.transactions.Transactional

@Transactional
class BusinessTakeService {

    def businessTake() {
        return Business.list()
    }
}
