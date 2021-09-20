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

import fr.formation.dao.IParachuteDaoJpaRepository;
import fr.formation.model.Parachute;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/parachute")
public class ParachuteApiController {

    @Autowired
    private IParachuteDaoJpaRepository daoParachute;

    @GetMapping
    @JsonView(Views.Parachute.class)
    public List<Parachute> findAll() {
        return this.daoParachute.findAll();
    }

    @PostMapping
    public boolean ajouter(@RequestBody Parachute parachute) {
        try {
            this.daoParachute.save(parachute);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @DeleteMapping("/{id}")
    public boolean edit(@PathVariable int id) {
        try {
            this.daoParachute.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @PutMapping("/{id}")
    public boolean edit(@PathVariable int id, @RequestBody Parachute parachute) {
        try {
            parachute.setId(id);
            this.daoParachute.save(parachute);
            return true;
        } catch (Exception e) {
            return false;
        }
    }


}
