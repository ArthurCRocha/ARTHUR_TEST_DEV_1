package backend

class BusinessController {
    BusinessTakeService businessTakeService

    static defaultAction = "list"

 def list() { 
        def resposta = businessTakeService.businessTake()
        respond resposta, formats: ['json']
                          
    }

}
