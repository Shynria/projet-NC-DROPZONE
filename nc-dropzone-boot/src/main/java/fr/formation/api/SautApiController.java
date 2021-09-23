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
import fr.formation.dao.ISautDaoJpaRepository;
import fr.formation.model.Parachutiste;
import fr.formation.model.Saut;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/saut")
public class SautApiController {

    @Autowired
    private ISautDaoJpaRepository daoSaut;

    @Autowired
    private IParachutisteDaoJpaRepository daoParachutiste;

    @GetMapping
    @JsonView(Views.Saut.class)
    public List<Saut> findAll() {
        return this.daoSaut.findAll();
    }

    @GetMapping("/noVol")
    @JsonView(Views.Saut.class)
    public List<Saut> findAllByVol() {
        return this.daoSaut.findAllByVol(null);
    }

    @PostMapping
    public boolean ajouter(@RequestBody Saut saut) {
        try {
            this.daoSaut.save(saut);
            for(Parachutiste p : saut.getParachutistes()) {
                daoParachutiste.save(p);
            }
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @DeleteMapping("/{id}")
    public boolean edit(@PathVariable int id) {
        try {
            this.daoSaut.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @PutMapping("/{id}")
    public boolean edit(@PathVariable int id, @RequestBody Saut saut) {
        try {
            saut.setId(id);
            this.daoSaut.save(saut);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    
}
