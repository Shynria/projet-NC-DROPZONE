package fr.formation.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.formation.dao.IParachutisteDaoJpaRepository;
import fr.formation.model.Parachutiste;

@RestController // remplace @Controller et @ResponseBody, (meta-annotation)
@CrossOrigin("*") // pour eviter l'erreur dans demo-api.html
@RequestMapping("/api/parachutiste")
public class ParachutisteApiController {
    @Autowired
    private IParachutisteDaoJpaRepository daoParachutiste;

    @GetMapping
    public List<Parachutiste> findAll(){
        return this.daoParachutiste.findAll();
    }
    
}
