package backend

class BootStrap {


    def init = { servletContext ->
    def prada = new Business(name:"Prada", segment:"fashon").save()
    def merceds = new Business(name:"Merceds", segment:"veicle").save()
    def samsung = new Business(name:"Samsung", segment:"Tecnology").save()
    
    
    }
    def destroy = {
    }
}
