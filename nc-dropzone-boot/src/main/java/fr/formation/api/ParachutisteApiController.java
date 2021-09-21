package fr.formation.api;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonView;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
    @JsonView(Views.Parachutiste.class)
    public List<Parachutiste> findAll(){
        return this.daoParachutiste.findAll();
    }
    
    @PostMapping
    public boolean ajouter(@RequestBody Parachutiste parachutiste){
        try {
            this.daoParachutiste.save(parachutiste);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable int id){
        try {
            this.daoParachutiste.deleteById(id);
            return true;
        } catch (Exception e) {
           return false;
        }
    }
    @PutMapping("/{id}")
    public boolean edit(@PathVariable int id, @RequestBody Parachutiste parachutiste){
        try {
            parachutiste.setId(id);
            this.daoParachutiste.save(parachutiste);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
