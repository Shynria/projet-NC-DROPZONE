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

import fr.formation.dao.ISautDaoJpaRepository;
import fr.formation.dao.IVolDaoJpaRepository;
import fr.formation.model.EtatVol;
import fr.formation.model.Saut;
import fr.formation.model.Vol;

@RestController
@CrossOrigin("*")
@RequestMapping("api/vol")
public class VolApiController {

    @Autowired
    private IVolDaoJpaRepository daoVol;
    @Autowired
    private ISautDaoJpaRepository daoSaut;

    @GetMapping
    @JsonView(Views.Vol.class)
    public List<Vol> findAll(){
        return this.daoVol.findAll();
    }

    @GetMapping("/{etat}")
    @JsonView(Views.Vol.class)
    public List<Vol> findAllByEtatVol(@PathVariable EtatVol etat) {
        return this.daoVol.findAllByEtatVol(etat);
    }

    @GetMapping("/attente")
    @JsonView(Views.Vol.class)
    public List<Vol> findAllByNonTermineNonIncident() {
        List <Vol> vol = this.daoVol.findAllByEtatVol(EtatVol.EN_ATTENTE);
        vol.addAll(this.daoVol.findAllByEtatVol(EtatVol.EN_PREPARATION));
        vol.addAll(this.daoVol.findAllByEtatVol(EtatVol.EN_EMBARQUEMENT));
        
        return vol;
    }

    @PostMapping
    public boolean add(@RequestBody Vol vol){
        try{
            this.daoVol.save(vol);
            return true;
        }catch(Exception e){
            return false;
        }
    }

    @PutMapping("/{id}")
    public boolean edit(@PathVariable int id, @RequestBody Vol vol){
        try{
            for(Saut saut : vol.getSauts()) {
                saut.setVol(vol);
                daoSaut.save(saut);
            }
            vol.setId(id);
            this.daoVol.save(vol);
            return true;
        }catch(Exception e){
            return false;
        }
    }

    @DeleteMapping("/{id}")
    public boolean deleteById(@PathVariable int id){
        try{
            this.daoVol.deleteById(id);
            return true;
        }catch(Exception e){
            return false;
        }
    }
    
}
