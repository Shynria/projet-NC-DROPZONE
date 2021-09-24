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
import fr.formation.dao.ISautTandemDaoJpaRepository;
import fr.formation.dao.IVolDaoJpaRepository;
import fr.formation.model.EtatVol;
import fr.formation.model.Saut;
import fr.formation.model.SautTandem;
import fr.formation.model.Vol;

@RestController
@CrossOrigin("*")
@RequestMapping("api/vol")
public class VolApiController {

    @Autowired
    private IVolDaoJpaRepository daoVol;
    @Autowired
    private ISautDaoJpaRepository daoSaut;
    @Autowired
    private ISautTandemDaoJpaRepository daoSautTandem;

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
    public Msg edit(@PathVariable int id, @RequestBody Vol vol){

        // si on veut passer un vol a EN_VOL
        if( vol.getEtatVol() == EtatVol.EN_VOL && daoVol.getById(id).getEtatVol() != EtatVol.EN_VOL) {
            if( vol.getAvion().isDisponible()) {
                return new Msg("Avion indisponible");
            }
            
            for(Vol v : daoVol.findAllByEtatVol(EtatVol.EN_VOL)) {
                if( v.getAvion().getId() == vol.getAvion().getId()) {
                    return new Msg("Avion déjà en vol");
                }
            }

            for(Vol v : daoVol.findAllByEtatVol(EtatVol.EN_VOL)) {
                if( v.getPilote().getId() == vol.getPilote().getId()) {
                    return new Msg("Pilote déjà en vol");
                }
            }

            for(Vol v : daoVol.findAllByEtatVol(EtatVol.EN_VOL)) {
                if( v.getResponsableVol().getId() == vol.getResponsableVol().getId()) {
                    return new Msg("Responsable déjà en vol");
                }
            }

            int count = 1;
            for(Saut s : vol.getSauts()) {
                count += s.getParachutistes().size();
            }
            if( vol.getAvion().getCapacite() < count) {
                return new Msg("Trop de monde dans l'avion");
            }
        }

        try{
            for(Saut saut : vol.getSauts()) {
                saut.setVol(vol);
                daoSaut.save(saut);
            }
            for(SautTandem saut : vol.getSautsTandem()) {
                saut.setVol(vol);
                daoSautTandem.save(saut);
            }
            
            vol.setId(id);
            this.daoVol.save(vol);
            return new Msg("true");
        }catch(Exception e){
            return new Msg("Error");
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
